CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    FirstName TEXT,
    LastName TEXT,
    Mail TEXT
);

CREATE TABLE GameLog (
    FOREIGN KEY (UserId) REFERENCES Users (id),

    ActualSpins SMALLINT,
    GuessSpins SMALLINT,
    GameTime TIMESTAMP
);