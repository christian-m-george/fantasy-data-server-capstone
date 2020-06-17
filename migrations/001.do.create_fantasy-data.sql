CREATE TABLE users (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    username VARCHAR (255) UNIQUE NOT NULL,
    email VARCHAR (255) UNIQUE NOT NULL,
    password VARCHAR (225) NOT NULL
);

CREATE TABLE players (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    team VARCHAR (255) NOT NULL,
    player_name VARCHAR (255) NOT NULL,
    position VARCHAR (255) NOT NULL,
    average_draft_position NUMERIC NOT NULL,
    average_draft_position_ppr NUMERIC NOT NULL,
    bye_week NUMERIC NOT NULL,
    last_season_fantasy_points NUMERIC NOT NULL,
    projected_fantasy_points NUMERIC NOT NULL,
    player_id INTEGER NOT NULL
);
