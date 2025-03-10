CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    Nickname TEXT,
    Mail TEXT
);

CREATE TABLE GameLog (
    UserId SERIAL,
    FOREIGN KEY (UserId) REFERENCES Users (id) ON DELETE CASCADE,

    ActualSpins SMALLINT,
    GuessSpins SMALLINT,
    GameTime TIMESTAMP
);