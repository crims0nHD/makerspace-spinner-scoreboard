#!/usr/bin/env python3

# FastAPI
import uvicorn
from fastapi import FastAPI

# Postgres
import psycopg2

# database connection
db_connection = {}

# Setup API
app = FastAPI()

@app.get("/user")
def get_user(first_name = str, last_name = str):
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
def add_user(first_name = str, last_name = str, mail = str):
    # Prepare query
    cur = db_connection.cursor()
    cur.execute(query, (first_name, last_name))
    query = "SELECT * FROM Users WHERE FirstName=%s AND LastName=%s"
    if cur.rowcount > 0:
        return {
            "success": False,
            "message": "User already exists"
        }
    
    add_query = "INSERT INTO Users VALUES (%s, %s, %s)"
    cur.execute(add_query, (first_name, last_name, mail))
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
                port=8000)

if __name__ == "__main__":
    main()