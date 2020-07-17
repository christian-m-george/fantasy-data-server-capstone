const express = require("express");
const path = require("path");
// const playerDetailService = require("./player-detail-service");
const playerDetailRouter = express.Router();
const axios = require("axios");

https: playerDetailRouter.route("/player/details/season").get((req, res, next) => {
  const knexInstance = req.app.get("db");

  let season = "2019REG";
  let playerID = 18877;

  axios
    .get(
      `https://api.sportsdata.io/v3/nfl/stats/json/PlayerSeasonStatsByPlayerID/${season}/${playerID}?key=4f05923a8fb2495db32041a3ac9b913a`
    )
    .then(function (response) {
      console.log(response);
      res.json(response.data)

      function checkInteger(inputInteger) {
        let outputValue = inputInteger;
        if (inputInteger === "") {
          outputValue = 0;
        }
        if (inputInteger === undefined) {
          outputValue = 0;
        }
        if (inputInteger == null) {
          outputValue = 0;
        }
        return outputValue;
      }

      // if a string is undefinded or null, default it to "no details"
      function checkString(inputString) {
        let outputText = inputString;
        if (inputString === undefined) {
          outputText = "no details";
        }
        if (inputString == null) {
          outputText = "no details";
        }
        return outputText;
      }

      // if a URL is undefinded or null, default it to the root url "/"
      function checkURL(inputURL) {
        let outputURL = inputURL;
        if (inputURL === undefined) {
          outputURL = "/";
        }
        if (inputURL == null) {
          outputURL = "/";
        }
        return outputURL;
      }

      function checkEmptyImage(inputURL) {
        let outputURL = inputURL;
        if (inputURL === undefined) {
          outputURL =
            "https://legacytaylorsville.com/wp-content/uploads/2015/07/No-Image-Available1.png";
        }
        if (inputURL == null) {
          outputURL =
            "https://legacytaylorsville.com/wp-content/uploads/2015/07/No-Image-Available1.png";
        }
        return outputURL;
      }

      let output = {
        player_id: response.data.PlayerID,
        Season_Type: response.data.SeasonType,
        season: response.data.Season,
        team: response.data.Team,
        player_number: response.data.Number,
        player_name: response.data.Name,
        position: response.data.Position,
        position_category: response.data.PositionCategory,
        activated: response.data.Activated,
        played: response.data.Played,
        games_started: response.data.Started,
        passing_attempts: response.data.PassingAttempts,
        passing_completions: response.data.PassingCompletions,
        passing_yards: response.data.PassingYards,
        passing_completion_percentage: response.data.PassingCompletionPercentage,
        passing_yards_per_attempt: response.data.PassingYardsPerAttempt,
        passing_yards_per_completion: response.data.PassingYardsPerCompletion,
        passing_touchdowns: response.data.PassingTouchdowns,
        passing_interceptions: response.data.PassingInterceptions,
        passing_rating: response.data.PassingRating,
        passing_long: response.data.PassingLong,
        passing_sacks: response.data.PassingSacks,
        passing_sack_yards: response.data.PassingSackYards,
        rushing_attempts: response.data.RushingAttempts,
        rushing_yards: response.data.RushingYards,
        rushing_yards_per_attempt: response.data.RushingYardsPerAttempt,
        rushing_touchdowns: response.data.RushingTouchdowns,
        rushing_long: response.data.RushingLong,
        receiving_targets: response.data.ReceivingTargets,
        receptions: response.data.Receptions,
        receiving_yards: response.data.ReceivingYards,
        receiving_yardsvper_reception: response.data.ReceivingYardsPerReception,
        receiving_touchdowns: response.data.ReceivingTouchdowns,
        receiving_long: response.data.ReceivingLong,
        fumbles: response.data.Fumbles,
        fumbles_lost: response.data.FumblesLost,
        punt_returns: response.data.PuntReturns,
        punt_return_yards: response.data.PuntReturnYards,
        punt_return_yards_per_attempt: response.data.PuntReturnYardsPerAttempt,
        punt_return_touchdowns: response.data.PuntReturnTouchdowns,
        punt_return_long: response.data.PuntReturnLong,
        kick_returns: response.data.KickReturns,
        kick_return_yards: response.data.KickReturnYards,
        kick_return_yards_per_attempt: response.data.KickReturnYardsPerAttempt,
        kick_return_touchdowns: response.data.KickReturnTouchdowns,
        kick_return_long: response.data.KickReturnLong,
        solo_tackles: response.data.SoloTackles,
        assisted_tackles: response.data.AssistedTackles,
        tackles_for_loss: response.data.TacklesForLoss,
        sacks: response.data.Sacks,
        sack_yards: response.data.SackYards,
        quarterback_hits: response.data.QuarterbackHits,
        passes_defended: response.data.PassesDefended,
        fumbles_forced: response.data.FumblesForced,
        fumbles_recovered: response.data.FumblesRecovered,
        fumble_return_yards: response.data.FumbleReturnYards,
        fumble_return_touchdowns: response.data.FumbleReturnTouchdowns,
        interceptions: response.data.Interceptions,
        interception_return_yards: response.data.InterceptionReturnYards,
        interception_return_touchdowns: response.data.InterceptionReturnTouchdowns,
        blocked_kicks: response.data.BlockedKicks,
        special_teams_solo_tackles: response.data.SpecialTeamsSoloTackles,
        special_teams_assisted_tackles: response.data.SpecialTeamsAssistedTackles,
        misc_solo_tackles: response.data.MiscSoloTackles,
        misc_assisted_tackles: response.data.MiscAssistedTackles,
        punts: response.data.Punts,
        punt_yards: response.data.PuntYards,
        punt_average: response.data.PuntAverage,
        field_goals_attempted: response.data.FieldGoalsAttempted,
        field_goals_made: response.data.FieldGoalsMade,
        field_goals_longest_made: response.data.FieldGoalsLongestMade,
        extra_points_made: response.data.ExtraPointsMade,
        two_point_conversion_passes: response.data.TwoPointConversionPasses,
        two_point_conversion_runs: response.data.TwoPointConversionRuns,
        two_point_conversion_receptions: response.data.TwoPointConversionReceptions,
        fantasy_points: response.data.FantasyPoints,
        fantasy_points_ppr: response.data.FantasyPointsPPR,
        reception_percentage: response.data.ReceptionPercentage,
        receiving_yardsper_target: response.data.ReceivingYardsPerTarget,
        tackles: response.data.Tackles,
        offensive_touchdowns: response.data.OffensiveTouchdowns,
        defensive_touchdowns: response.data.DefensiveTouchdowns,
        special_teams_touchdowns: response.data.SpecialTeamsTouchdowns,
        touchdowns: response.data.Touchdowns,
        fantasy_position: response.data.FantasyPosition,
        field_goal_percentage: response.data.FieldGoalPercentage,
        player_season_id: response.data.PlayerSeasonID,
        fumbles_own_recoveries: response.data.FumblesOwnRecoveries,
        fumbles_out_of_bounds: response.data.FumblesOutOfBounds,
        kick_return_fair_catches: response.data.KickReturnFairCatches,
        punt_return_fair_catches: response.data.PuntReturnFairCatches,
        punt_touchbacks: response.data.PuntTouchbacks,
        punt_inside_20: response.data.PuntInside20,
        punt_net_average: response.data.PuntNetAverage,
        extra_points_attempted: response.data.ExtraPointsAttempted,
        blocked_kick_return_touchdowns: response.data.BlockedKickReturnTouchdowns,
        field_goal_return_touchdowns: response.data.FieldGoalReturnTouchdowns,
        safeties: response.data.Safeties,
        field_goals_had_blocked: response.data.FieldGoalsHadBlocked,
        punts_had_blocked: response.data.PuntsHadBlocked,
        extra_points_had_blocked: response.data.ExtraPointsHadBlocked,
        punt_long: response.data.PuntLong,
        blocked_kick_return_yards: response.data.BlockedKickReturnYards,
        field_goal_return_yards: response.data.FieldGoalReturnYards,
        punt_net_yards: response.data.PuntNetYards,
        special_teams_fumbles_forced: response.data.SpecialTeamsFumblesForced,
        special_teams_fumbles_recovered: response.data.SpecialTeamsFumblesRecovered,
        misc_fumbles_forced: response.data.MiscFumblesForced,
        misc_fumbles_recovered: response.data.MiscFumblesRecovered,
        short_name: response.data.ShortName,
        safeties_allowed: response.data.SafetiesAllowed,
        temperature: response.data.Temperature,
        humidity: response.data.Humidity,
        wind_speed: response.data.WindSpeed,
        offensive_snaps_played: response.data.OffensiveSnapsPlayed,
        defensive_snaps_played: response.data.DefensiveSnapsPlayed,
        special_teams_snaps_played: response.data.SpecialTeamsSnapsPlayed,
        offensive_team_snaps: response.data.OffensiveTeamSnaps,
        defensive_team_snaps: response.data.DefensiveTeamSnaps,
        special_teams_team_snaps: response.data.SpecialTeamsTeamSnaps,
        two_point_conversion_returns: response.data.TwoPointConversionReturns,
        fantasy_points_fan_duel: response.data.FantasyPointsFanDuel,
        field_goals_made_0_to_19: response.data.FieldGoalsMade0to19,
        field_goals_made_20_to_29: response.data.FieldGoalsMade20to29,
        field_goals_made_30_to_39: response.data.FieldGoalsMade30to39,
        field_goals_made_40_to_49: response.data.FieldGoalsMade40to49,
        field_goals_made_50_plus: response.data.FieldGoalsMade50Plus,
        fantasy_points_draft_kings: response.data.FantasyPointsDraftKings,
        fantasy_points_yahoo: response.data.FantasyPointsYahoo,
        average_draft_position: response.data.AverageDraftPosition,
        average_draft_position_ppr: response.data.AverageDraftPositionPPR,
        team_id: response.data.TeamID,
        global_team_id: response.data.GlobalTeamID,
        fantasy_points_fantasy_draft: response.data.FantasyPointsFantasyDraft,
        average_draft_position_rookie: response.data.AverageDraftPositionRookie,
        average_draft_position_dynasty: response.data.AverageDraftPositionDynasty,
        average_draft_position_2_qb: response.data.AverageDraftPosition2QB
      };

      console.log(output);
      let dbSavePlayer = [];
    })
    .catch((err) => console.log(err));
});


https: playerDetailRouter.route("/player/details/week").get((req, res, next) => {
  const knexInstance = req.app.get("db");

  let season = "2019REG";
  let week = 3;
  let playerID = 18877;

  axios
    .get(
      `https://api.sportsdata.io/v3/nfl/stats/json/PlayerGameStatsByPlayerID/${season}/${week}/${playerID}?key=4f05923a8fb2495db32041a3ac9b913a`
    )
    .then(function (response) {
      console.log(response);
      res.json(response.data)

      function checkInteger(inputInteger) {
        let outputValue = inputInteger;
        if (inputInteger === "") {
          outputValue = 0;
        }
        if (inputInteger === undefined) {
          outputValue = 0;
        }
        if (inputInteger == null) {
          outputValue = 0;
        }
        return outputValue;
      }

      // if a string is undefinded or null, default it to "no details"
      function checkString(inputString) {
        let outputText = inputString;
        if (inputString === undefined) {
          outputText = "no details";
        }
        if (inputString == null) {
          outputText = "no details";
        }
        return outputText;
      }

      // if a URL is undefinded or null, default it to the root url "/"
      function checkURL(inputURL) {
        let outputURL = inputURL;
        if (inputURL === undefined) {
          outputURL = "/";
        }
        if (inputURL == null) {
          outputURL = "/";
        }
        return outputURL;
      }

      function checkEmptyImage(inputURL) {
        let outputURL = inputURL;
        if (inputURL === undefined) {
          outputURL =
            "https://legacytaylorsville.com/wp-content/uploads/2015/07/No-Image-Available1.png";
        }
        if (inputURL == null) {
          outputURL =
            "https://legacytaylorsville.com/wp-content/uploads/2015/07/No-Image-Available1.png";
        }
        return outputURL;
      }

      let output = {
        id: response.data.id,
        season: response.data.season,
        game_date: response.data.game_date,
        week: response.data.week,
        team: response.data.team,
        opponent: response.data.opponent,
        home_or_away: response.data.home_or_away,
        player_name: response.data.player_name,
        player_number: response.data.player_number,
        position: response.data.position,
        position_category: response.data.position_category,
        played: response.data.played,
        passing_attempts: response.data.PassingAttempts,
        passing_completions: response.data.PassingCompletions,
        passing_yards: response.data.PassingYards,
        passing_completion_percentage: response.data.PassingCompletionPercentage,
        passing_yards_per_attempt: response.data.PassingYardsPerAttempt,
        passing_yards_per_completion: response.data.PassingYardsPerCompletion,
        passing_touchdowns: response.data.PassingTouchdowns,
        passing_interceptions: response.data.PassingInterceptions,
        passing_rating: response.data.PassingRating,
        passing_long: response.data.PassingLong,
        passing_sacks: response.data.PassingSacks,
        passing_sack_yards: response.data.PassingSackYards,
        rushing_attempts: response.data.RushingAttempts,
        rushing_yards: response.data.RushingYards,
        rushing_yards_per_attempt: response.data.RushingYardsPerAttempt,
        rushing_touchdowns: response.data.RushingTouchdowns,
        rushing_long: response.data.RushingLong,
        receiving_targets: response.data.ReceivingTargets,
        receptions: response.data.Receptions,
        receiving_yards: response.data.ReceivingYards,
        receiving_yards_per_reception: response.data.ReceivingYardsPerReception,
        receiving_touchdowns: response.data.ReceivingTouchdowns,
        receiving_long: response.data.ReceivingLong,
        fumbles: response.data.Fumbles,
        fumbles_lost: response.data.FumblesLost,
        punt_returns: response.data.PuntReturns,
        punt_return_yards: response.data.PuntReturnYards,
        punt_return_yards_per_attempt: response.data.PuntReturnYardsPerAttempt,
        punt_return_touchdowns: response.data.PuntReturnTouchdowns,
        punt_return_long: response.data.PuntReturnLong,
        kick_returns: response.data.KickReturns,
        kick_return_yards: response.data.KickReturnYards,
        kick_return_yards_per_attempt: response.data.KickReturnYardsPerAttempt,
        kick_return_touchdowns: response.data.KickReturnTouchdowns,
        kick_return_long: response.data.KickReturnLong,
        solo_tackles: response.data.SoloTackles,
        assisted_tackles: response.data.AssistedTackles,
        tackles_for_loss: response.data.TacklesForLoss,
        sacks: response.data.Sacks,
        sack_yards: response.data.SackYards,
        quarterback_hits: response.data.QuarterbackHits,
        passes_defended: response.data.PassesDefended,
        fumbles_forced: response.data.FumblesForced,
        fumbles_recovered: response.data.FumblesRecovered,
        fumble_return_yards: response.data.FumbleReturnYards,
        fumble_return_touchdowns: response.data.FumbleReturnTouchdowns,
        interceptions: response.data.Interceptions,
        interception_return_yards: response.data.InterceptionReturnYards,
        interception_return_touchdowns: response.data.InterceptionReturnTouchdowns,
        blocked_kicks: response.data.BlockedKicks,
        special_teams_solo_tackles: response.data.SpecialTeamsSoloTackles,
        special_teams_assisted_tackles: response.data.SpecialTeamsAssistedTackles,
        misc_solo_tackles: response.data.MiscSoloTackles,
        misc_assisted_tackles: response.data.MiscAssistedTackles,
        punts: response.data.Punts,
        punt_yards: response.data.PuntYards,
        punt_average: response.data.PuntAverage,
        field_goals_attempted: response.data.FieldGoalsAttempted,
        field_goals_made: response.data.FieldGoalsMade,
        field_goals_longest_made: response.data.FieldGoalsLongestMade,
        extra_points_made: response.data.ExtraPointsMade,
        two_point_conversion_passes: response.data.TwoPointConversionPasses,
        two_point_conversion_runs: response.data.TwoPointConversionRuns,
        two_point_conversion_receptions: response.data.TwoPointConversionReceptions,
        fantasy_points: response.data.FantasyPoints,
        fantasy_points_ppr: response.data.FantasyPointsPPR,
        reception_percentage: response.data.ReceptionPercentage,
        receiving_yards_per_target: response.data.ReceivingYardsPerTarget,
        tackles: response.data.Tackles,
        offensive_touchdowns: response.data.OffensiveTouchdowns,
        defensive_touchdowns: response.data.DefensiveTouchdowns,
        special_teams_touchdowns: response.data.SpecialTeamsTouchdowns,
        touchdowns: response.data.Touchdowns,
        field_goal_percentage: response.data.FieldGoalPercentage,
        player_game_id: response.data.PlayerGameID,
        fumbles_own_recoveries: response.data.FumblesOwnRecoveries,
        fumbles_out_of_bounds: response.data.FumblesOutOfBounds,
        kick_return_fair_catches: response.data.KickReturnFairCatches,
        punt_return_fair_catches: response.data.PuntReturnFairCatches,
        punt_touchbacks: response.data.PuntTouchbacks,
        punt_inside_20: response.data.PuntInside20,
        punt_net_average: response.data.PuntNetAverage,
        extra_points_attempted: response.data.ExtraPointsAttempted,
        blocked_kick_return_touchdowns: response.data.BlockedKickReturnTouchdowns,
        field_goal_return_touchdowns: response.data.FieldGoalReturnTouchdowns,
        safeties: response.data.Safeties,
        field_goals_had_blocked: response.data.FieldGoalsHadBlocked,
        punts_had_blocked: response.data.PuntsHadBlocked,
        extra_points_had_blocked: response.data.ExtraPointsHadBlocked,
        punt_long: response.data.PuntLong,
        blocked_kick_return_yards: response.data.BlockedKickReturnYards,
        field_goal_return_yards: response.data.FieldGoalReturnYards,
        punt_net_yards: response.data.PuntNetYards,
        special_teams_fumbles_forced: response.data.SpecialTeamsFumblesForced,
        special_teams_fumbles_recovered: response.data.SpecialTeamsFumblesRecovered,
        misc_fumbles_forced: response.data.MiscFumblesForced,
        misc_fumbles_recovered: response.data.MiscFumblesRecovered,
        game_key: response.data.GameKey,
        playing_surface: response.data.PlayingSurface,
        is_game_over: response.data.IsGameOver,
        safeties_allowed: response.data.SafetiesAllowed,
        stadium: response.data.Stadium,
        temperature: response.data.Temperature,
        humidity: response.data.Humidity,
        offensive_snaps_played: response.data.OffensiveSnapsPlayed,
        defensive_snaps_played: response.data.DefensiveSnapsPlayed,
        special_teams_snaps_played: response.data.SpecialTeamsSnapsPlayed,
        offensive_team_snaps: response.data.OffensiveTeamSnaps,
        defensive_team_snaps: response.data.DefensiveTeamSnaps,
        special_teams_team_snaps: response.data.SpecialTeamsTeamSnaps,
        two_point_conversion_returns: response.data.TwoPointConversionReturns,
        fantasy_points_fanduel: response.data.FantasyPointsFanDuel,
        field_goals_made_0_to_19: response.data.FieldGoalsMade0to19,
        field_goals_made_20_to_29: response.data.FieldGoalsMade20to29,
        field_goals_made_30_to_39: response.data.FieldGoalsMade30to39,
        field_goals_made_40_to_49: response.data.FieldGoalsMade40to49,
        field_goals_made_50_plus: response.data.FieldGoalsMade50Plus,
        offensive_fumble_recovery_touchdowns: response.data.OffensiveFumbleRecoveryTouchdowns,
        fantasy_points_draft_kings: response.data.FantasyPointsDraftKings,
        fantasy_points_yahoo: response.data.FantasyPointsYahoo,
        opponent_rank: response.data.OpponentRank,
        opponent_positionrank: response.data.OpponentPositionRank,
        declared_inactive: response.data.DeclaredInactive,
        score_id: response.data.ScoreID,
        player_id: response.data.player_id
      };

      console.log(output);
      let dbSavePlayer = [];


      // dbSavePlayer[i] = {
      //   FantasyPlayerKey: validatedData.FantasyPlayerKey,
      //   PlayerID: validatedData.PlayerID,
      //   Name: validatedData.Name,
      //   Team: validatedData.Team,
      //   Position: validatedData.Position,
      //   AverageDraftPosition: validatedData.AverageDraftPosition,
      //   AverageDraftPositionPPR: validatedData.AverageDraftPositionPPR,
      //   ByeWeek: validatedData.ByeWeek,
      //   LastSeasonFantasyPoints: validatedData.LastSeasonFantasyPoints,
      //   ProjectedFantasyPoints: validatedData.ProjectedFantasyPoints
      // };
      // playerDataService
      //   .insertPlayer(req.app.get("db"), validatedData)
      //   .then((validatedData) => {
      //     res.json(validatedData);
      //     next();
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });

    })
    .catch((err) => console.log(err));
});

module.exports = playerDetailRouter;