#!/usr/bin/env python3

import os

# FastAPI
import uvicorn
import pandas as pd
from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from fastapi.security.api_key import APIKeyCookie
from tempfile import NamedTemporaryFile

# Postgres
import psycopg2

# database connection
db_connection = None

# API key (TODO: better auth)
api_key = None

# Setup API
api_key_cookie = APIKeyCookie(name="apikey")
def verify_api_key(key: str = Depends(api_key_cookie)):
    if key != api_key:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Could not validate credentials",
        )

app = FastAPI(dependencies=[Depends(verify_api_key)])
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.post("/user")
def add_user(nickname: str, mail: str = ""):
    if nickname == "":
        return {
            "success": False,
            "message": "Username was left blank"
        }

    # Prepare query
    cur = db_connection.cursor()
    query = "SELECT * FROM Users WHERE Nickname=%s"
    cur.execute(query, (nickname,))
    if cur.rowcount > 0:
        return {
            "success": False,
            "message": "User already exists"
        }
    
    add_query = "INSERT INTO Users (Nickname, Mail) VALUES (%s, %s)"
    cur.execute(add_query, (nickname, mail))
    db_connection.commit()
    return {
        "success": True
    }

@app.get("/game")
def list_games(max_entries: int):
    cur = db_connection.cursor()
    query = """SELECT u.Nickname, g.GuessSpins, g.ActualSpins, ABS(g.ActualSpins - g.GuessSpins) AS score 
                FROM GameLog g JOIN Users u ON g.UserId = u.id
                ORDER BY score ASC, g.ActualSpins DESC
                LIMIT %s
                """
    cur.execute(query, [max_entries])
    return {
        "success": True,
        "header": [
            "Nickname",
            "Schätzung",
            "Erreicht",
            "Differenz"
        ],
        "data": cur.fetchall(),
    }

@app.post("/game")
def add_game(nickname: str,
             guess_score: int,
             actual_score: int):
    cur = db_connection.cursor()
    query = "SELECT * FROM Users WHERE Nickname=%s"
    cur.execute(query, (nickname,))
    if cur.rowcount == 0:
        return {
            "success": False,
            "message": "User does not exist"
        }

    query = """
        INSERT INTO GameLog (UserId, ActualSpins, GuessSpins, GameTime)
        VALUES 
        ((SELECT id FROM Users WHERE Nickname=%s),
        %s,
        %s,
        NOW())
        """
    cur.execute(query, (nickname, actual_score, guess_score))
    db_connection.commit()
    return {
        "success": True
    }

def fetch_table_data(cursor, table_name):
    query = f"SELECT * FROM {table_name};"
    cursor.execute(query)
    data = cursor.fetchall()
    columns = [desc[0] for desc in cursor.description]
    return pd.DataFrame(data, columns=columns)

@app.get("/download")
def download_games():
    cur = db_connection.cursor()

    table_users = fetch_table_data(cur, "Users")
    table_games = fetch_table_data(cur, "GameLog")

    with NamedTemporaryFile(delete=False, suffix=".xlsx") as temp_file:
        temp_file_name = temp_file.name
            
        # Create an Excel writer object and write the data into it
        with pd.ExcelWriter(temp_file_name, engine='xlsxwriter') as writer:
            table_users.to_excel(writer, sheet_name='Users', index=False)
            table_games.to_excel(writer, sheet_name='Games', index=False)
            
    return FileResponse(temp_file_name, filename="db_dump.xlsx", media_type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")


# Main
def main():
    db_user = os.getenv("POSTGRES_USER")
    db_password = os.getenv("POSTGRES_PASSWORD")
    global api_key
    api_key = os.getenv("API_KEY")

    if db_user is None or db_password is None or api_key is None:
        print("Not all env variables are set correctly! Exiting!")
        exit(-1)

    global db_connection
    db_connection = psycopg2.connect(
        host="database",
        database="game_db",
        user=db_user,
        password=db_password
    )

    uvicorn.run(app,
                host="0.0.0.0",
                port=8001)

if __name__ == "__main__":
    main()