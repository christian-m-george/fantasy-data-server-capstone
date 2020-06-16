const express = require("express");
const path = require("path");
const playerDataService = require("./player-data-service");
const playerRouter = express.Router();
const axios = require("axios");

//api.sportsdata.io/v3/nfl/scores/json/Players?key=4f05923a8fb2495db32041a3ac9b913a

https: playerRouter.route("/player/all").get((req, res, next) => {
  const knexInstance = req.app.get("db");

  axios
    .get(
      "https://api.sportsdata.io/v3/nfl/stats/json/FantasyPlayers?key=4f05923a8fb2495db32041a3ac9b913a"
      // ,
      //   {
      //     headers: {
      //       Authorization: "70ba99fec3f2ffeb58b1814b7fb15905",
      //       "Content-Type": "application/json",
      //       Port: 443,
      //     },
      //   }
    )
    .then(function (response) {
      console.log(response);

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

      let validatedData = response.data.map((player) => {
        let output = {
          FantasyPlayerKey: checkString(player.FantasyPlayerKey),
          PlayerID: checkInteger(player.PlayerID),
          Name: checkString(player.Name),
          Team: checkString(player.Team),
          Position: checkString(player.Position),
          AverageDraftPosition: player.AverageDraftPosition,
          AverageDraftPositionPPR: player.AverageDraftPositionPPR,
          ByeWeek: checkInteger(player.ByeWeek),
          LastSeasonFantasyPoints: player.LastSeasonFantasyPoints,
          ProjectedFantasyPoints: player.ProjectedFantasyPoints
        };
        return output;
      });
      res.json(validatedData);
      let dbSavePlayer = [];
    //   let data = response.data.results;
      console.log(data);

      dbSavePlayer[i] = {
        FantasyPlayerKey: validatedData.FantasyPlayerKey,
        PlayerID: validatedData.PlayerID,
        Name: validatedData.Name,
        Team: validatedData.Team,
        Position: validatedData.Position,
        AverageDraftPosition: validatedData.AverageDraftPosition,
        AverageDraftPositionPPR: validatedData.AverageDraftPositionPPR,
        ByeWeek: validatedData.ByeWeek,
        LastSeasonFantasyPoints: validatedData.LastSeasonFantasyPoints,
        ProjectedFantasyPoints: validatedData.ProjectedFantasyPoints
      };
      playerDataService
        .insertPlayer(req.app.get("db"), dbSavePlayer[i])
        .then((data) => {
          next();
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => console.log(err));
});

module.exports = playerRouter;
