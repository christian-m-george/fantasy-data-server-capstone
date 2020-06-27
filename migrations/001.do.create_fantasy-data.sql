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
    player_id INTEGER UNIQUE NOT NULL
);


CREATE TABLE player_details_weekly (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    season INTEGER NOT NULL,
    game_date VARCHAR (255) NOT NULL,
    week INTEGER NOT NULL,
    team VARCHAR (255) NOT NULL,
    opponent VARCHAR (255) NOT NULL,
    home_or_away VARCHAR (255) NOT NULL,
    player_name VARCHAR (255) NOT NULL,
    player_number INTEGER NOT NULL,
    position VARCHAR (255) NOT NULL,
    position_category VARCHAR (255) NOT NULL,
    played INTEGER NOT NULL,
    PassingAttempts INTEGER NOT NULL,
    PassingCompletions INTEGER NOT NULL,
    PassingYards INTEGER NOT NULL,
    PassingCompletionPercentage INTEGER NOT NULL,
    PassingYardsPerAttempt INTEGER NOT NULL,
    PassingYardsPerCompletion INTEGER NOT NULL,
    PassingTouchdowns INTEGER NOT NULL,
    PassingInterceptions INTEGER NOT NULL,
    PassingRating INTEGER NOT NULL,
    PassingLong INTEGER NOT NULL,
    PassingSacks INTEGER NOT NULL,
    PassingSackYards INTEGER NOT NULL,
    RushingAttempts INTEGER NOT NULL,
    RushingYards INTEGER NOT NULL,
    RushingYardsPerAttempt INTEGER NOT NULL,
    RushingTouchdowns INTEGER NOT NULL,
    RushingLong INTEGER NOT NULL,
    ReceivingTargets INTEGER NOT NULL,
    Receptions INTEGER NOT NULL,
    ReceivingYards INTEGER NOT NULL,
    ReceivingYardsPerReception INTEGER NOT NULL,
    ReceivingTouchdowns INTEGER NOT NULL,
    ReceivingLong INTEGER NOT NULL,
    Fumbles INTEGER NOT NULL,
    FumblesLost INTEGER NOT NULL,
    PuntReturns INTEGER NOT NULL,
    PuntReturnYards INTEGER NOT NULL,
    PuntReturnYardsPerAttempt INTEGER NOT NULL,
    PuntReturnTouchdowns INTEGER NOT NULL,
    PuntReturnLong INTEGER NOT NULL,
    KickReturns INTEGER NOT NULL,
    KickReturnYards INTEGER NOT NULL,
    KickReturnYardsPerAttempt INTEGER NOT NULL,
    KickReturnTouchdowns INTEGER NOT NULL,
    KickReturnLong INTEGER NOT NULL,
    SoloTackles INTEGER NOT NULL,
    AssistedTackles INTEGER NOT NULL,
    TacklesForLoss INTEGER NOT NULL,
    Sacks INTEGER NOT NULL,
    SackYards INTEGER NOT NULL,
    QuarterbackHits INTEGER NOT NULL,
    PassesDefended INTEGER NOT NULL,
    FumblesForced INTEGER NOT NULL,
    FumblesRecovered INTEGER NOT NULL,
    FumbleReturnYards INTEGER NOT NULL,
    FumbleReturnTouchdowns INTEGER NOT NULL,
    Interceptions INTEGER NOT NULL,
    InterceptionReturnYards INTEGER NOT NULL,
    InterceptionReturnTouchdowns INTEGER NOT NULL,
    BlockedKicks INTEGER NOT NULL,
    SpecialTeamsSoloTackles INTEGER NOT NULL,
    SpecialTeamsAssistedTackles INTEGER NOT NULL,
    MiscSoloTackles INTEGER NOT NULL,
    MiscAssistedTackles INTEGER NOT NULL,
    Punts INTEGER NOT NULL,
    PuntYards INTEGER NOT NULL,
    PuntAverage INTEGER NOT NULL,
    FieldGoalsAttempted INTEGER NOT NULL,
    FieldGoalsMade INTEGER NOT NULL,
    FieldGoalsLongestMade INTEGER NOT NULL,
    ExtraPointsMade INTEGER NOT NULL,
    TwoPointConversionPasses INTEGER NOT NULL,
    TwoPointConversionRuns INTEGER NOT NULL,
    TwoPointConversionReceptions INTEGER NOT NULL,
    FantasyPoints INTEGER NOT NULL,
    FantasyPointsPPR INTEGER NOT NULL,
    ReceptionPercentage INTEGER NOT NULL,
    ReceivingYardsPerTarget INTEGER NOT NULL,
    Tackles INTEGER NOT NULL,
    OffensiveTouchdowns INTEGER NOT NULL,
    DefensiveTouchdowns INTEGER NOT NULL,
    SpecialTeamsTouchdowns INTEGER NOT NULL,
    Touchdowns INTEGER NOT NULL,
    FieldGoalPercentage INTEGER NOT NULL,
    PlayerGameID INTEGER NOT NULL,
    FumblesOwnRecoveries INTEGER NOT NULL,
    FumblesOutOfBounds INTEGER NOT NULL,
    KickReturnFairCatches INTEGER NOT NULL,
    PuntReturnFairCatches INTEGER NOT NULL,
    PuntTouchbacks INTEGER NOT NULL,
    PuntInside20 INTEGER NOT NULL,
    PuntNetAverage INTEGER NOT NULL,
    ExtraPointsAttempted INTEGER NOT NULL,
    BlockedKickReturnTouchdowns INTEGER NOT NULL,
    FieldGoalReturnTouchdowns INTEGER NOT NULL,
    Safeties INTEGER NOT NULL,
    FieldGoalsHadBlocked INTEGER NOT NULL,
    PuntsHadBlocked INTEGER NOT NULL,
    ExtraPointsHadBlocked INTEGER NOT NULL,
    PuntLong INTEGER NOT NULL,
    BlockedKickReturnYards INTEGER NOT NULL,
    FieldGoalReturnYards INTEGER NOT NULL,
    PuntNetYards INTEGER NOT NULL,
    SpecialTeamsFumblesForced INTEGER NOT NULL,
    SpecialTeamsFumblesRecovered INTEGER NOT NULL,
    MiscFumblesForced INTEGER NOT NULL,
    MiscFumblesRecovered INTEGER NOT NULL,
    GameKey VARCHAR (255) NOT NULL,
    PlayingSurface VARCHAR (255) NOT NULL,
    IsGameOver VARCHAR (255) NOT NULL,
    SafetiesAllowed INTEGER NOT NULL,
    Stadium VARCHAR (255) NOT NULL,
    Temperature INTEGER NOT NULL,
    Humidity INTEGER NOT NULL,
    OffensiveSnapsPlayed INTEGER NOT NULL,
    DefensiveSnapsPlayed INTEGER NOT NULL,
    SpecialTeamsSnapsPlayed INTEGER NOT NULL,
    OffensiveTeamSnaps INTEGER NOT NULL,
    DefensiveTeamSnaps INTEGER NOT NULL,
    SpecialTeamsTeamSnaps INTEGER NOT NULL,
    TwoPointConversionReturns INTEGER NOT NULL,
    FantasyPointsFanDuel INTEGER NOT NULL,
    FieldGoalsMade0to19 INTEGER NOT NULL,
    FieldGoalsMade20to29 INTEGER NOT NULL,
    FieldGoalsMade30to39 INTEGER NOT NULL,
    FieldGoalsMade40to49 INTEGER NOT NULL,
    FieldGoalsMade50Plus INTEGER NOT NULL,
    OffensiveFumbleRecoveryTouchdowns VARCHAR (255) NOT NULL,
    FantasyPointsDraftKings INTEGER NOT NULL,
    FantasyPointsYahoo INTEGER NOT NULL,
    OpponentRank INTEGER NOT NULL,
    OpponentPositionRank INTEGER NOT NULL,
    DeclaredInactive VARCHAR (255) NOT NULL,
    ScoreID INTEGER NOT NULL,
    player_id INTEGER UNIQUE NOT NULL
);


CREATE TABLE watchlist (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    player_id INTEGER UNIQUE NOT NULL
    player_name VARCHAR (255) NOT NULL,
    team VARCHAR (255) NOT NULL,
    position VARCHAR (255) NOT NULL,
    average_draft_position NUMERIC NOT NULL,
    average_draft_position_ppr NUMERIC NOT NULL,
    bye_week NUMERIC NOT NULL,
    last_season_fantasy_points NUMERIC NOT NULL,
    projected_fantasy_points NUMERIC NOT NULL,
);