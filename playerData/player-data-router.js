const express = require("express");
const path = require("path");
const playerDataService = require("./player-data-service");
const playerRouter = express.Router();
const axios = require("axios");

  playerRouter.route("/player/all").get((req, res, next) => {
    const knexInstance = req.app.get("db");
    playerDataService
      .getAllPlayers(knexInstance)
      .then((players) => {
        res.json(
          movies.map((players) => ({
            ...players,
          }))
        );
      })
      .catch((err) => {
        next(err);
      });
    })

module.exports = playerRouter;