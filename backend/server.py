#!/usr/bin/env python3

# FastAPI
import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Postgres
import psycopg2

# database connection
db_connection = None

# Setup API
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/user")
def get_user(first_name: str, last_name: str):
    # Prepare query
    cur = db_connection.cursor()
    query = "SELECT * FROM Users WHERE FirstName=%s AND LastName=%s"
    # Execute query
    cur.execute(query, (first_name, last_name))
    if cur.rowcount == 1:
        user_data = cur.fetchone()
        return { 
            "success": True,
            "data": {
                "first_name": user_data[0],
                "last_name": user_data[1],
                "mail": user_data[2]
                }
            }
    elif cur.rowcount > 1:
        return {
            "success": False,
            "message": "Multiple instances of a user?"
        }
    else:
        return {
            "success": False,
            "message": "User does not exist"
        }

@app.post("/user")
def add_user(nickname: str, first_name: str, last_name: str, mail: str):
    # Prepare query
    cur = db_connection.cursor()
    query = "SELECT * FROM Users WHERE (FirstName=%s AND LastName=%s) OR Nickname=%s"
    cur.execute(query, (first_name, last_name, nickname))
    if cur.rowcount > 0:
        return {
            "success": False,
            "message": "User already exists"
        }
    
    add_query = "INSERT INTO Users (Nickname, FirstName, LastName, Mail) VALUES (%s, %s, %s, %s)"
    cur.execute(add_query, (nickname, first_name, last_name, mail))
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

# Main
def main():
    global db_connection
    db_connection = psycopg2.connect(
        host="database",
        database="game_db",
        user="test_user",
        password="test_password"
    )

    uvicorn.run(app,
                host="0.0.0.0",
                port=8001)

if __name__ == "__main__":
    main()