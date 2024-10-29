# makerspace-spinner-scoreboard
Scoreboard for the HSD spinner

-----------------------------------

## Installation (Docker)
The project uses Docker and Docker-compose to build and deploy containers hosting parts of the application.

The following things need to be configured since it can vary from setup to setup:
1. Database credentials inside docker-compose.yml and backend/server.py
2. Persistent database storage with docker volume
3. Changing the URL to the backend inside the frontend components

The following command instantiates all containers:
```sh
$ docker compose up -d
```

Afterwards the database still needs to be set up.
For this, log into the database and execute database/create-structure.sql.

## Usage

### Port 80:
- / holds a small navigation site

## Hacking and tinkering
Every subproject has documentation in their respective directory.