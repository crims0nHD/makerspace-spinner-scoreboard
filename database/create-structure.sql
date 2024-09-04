CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    Nickname TEXT,
    FirstName TEXT,
    LastName TEXT,
    Mail TEXT
);

CREATE TABLE GameLog (
    UserId SERIAL,
    FOREIGN KEY (UserId) REFERENCES Users (id),

    ActualSpins SMALLINT,
    GuessSpins SMALLINT,
    GameTime TIMESTAMP
);