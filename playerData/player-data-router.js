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
      "https://api.sportsdata.io/v3/nfl/scores/json/Players?key=4f05923a8fb2495db32041a3ac9b913a"
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
        let outputValue = inputInteger
        if (inputInteger === "") {
            outputValue = 0
        }
        if (inputInteger === undefined) {
            outputValue = 0
        }
        if (inputInteger == null) {
            outputValue = 0
        }
        return outputValue
    }

    // if a string is undefinded or null, default it to "no details"
    function checkString(inputString) {
        let outputText = inputString
        if (inputString === undefined) {
            outputText = "no details"
        }
        if (inputString == null) {
            outputText = "no details"
        }
        return outputText
    }

    // if a URL is undefinded or null, default it to the root url "/"
    function checkURL(inputURL) {
        let outputURL = inputURL
        if (inputURL === undefined) {
            outputURL = "/"
        }
        if (inputURL == null) {
            outputURL = "/"
        }
        return outputURL
    }

    function checkEmptyImage(inputURL) {
        let outputURL = inputURL
        if (inputURL === undefined) {
            outputURL = "https://legacytaylorsville.com/wp-content/uploads/2015/07/No-Image-Available1.png"
        }
        if (inputURL == null) {
            outputURL = "https://legacytaylorsville.com/wp-content/uploads/2015/07/No-Image-Available1.png"
        }
        return outputURL
    }

      let validatedData = response.data.map(player => {
        let output = {
            team: checkString(player.Team),
            first_name: checkString(player.FirstName),
            last_name: checkString(player.LastName),
            position: checkString(player.Position),
            height: checkString(player.Height),
            weight: checkInteger(player.Weight),
            college: checkString(player.College)
        }
        return output;
      });
      res.json(validatedData);
    //   data = response.data.results;
    //   console.log(data);
    //   console.log(data[0].genre_ids, "this is genre id");
    //   let dbSaveMovie = [];
    //   let outputGenreString = "";
    //   for (let i = 0; i < data.length; i++) {
    //     switch (data[i].genre_ids[0]) {
    //       case 27:
    //         outputGenreString = "Horror";
    //         break;
    //       case 28:
    //         outputGenreString = "Action";
    //         break;
    //       case 12:
    //         outputGenreString = "Adventure";
    //         break;
    //       case 16:
    //         outputGenreString = "Animation";
    //         break;
    //       case 35:
    //         outputGenreString = "Comedy";
    //         break;
    //       case 80:
    //         outputGenreString = "Crime";
    //         break;
    //       case 99:
    //         outputGenreString = "Documentary";
    //         break;
    //       case 27:
    //         outputGenreString = "Horror";
    //         break;
    //       case 18:
    //         outputGenreString = "Drama";
    //         break;
    //       case 10751:
    //         outputGenreString = "Family";
    //         break;
    //       case 14:
    //         outputGenreString = "Fantasy";
    //         break;
    //       case 36:
    //         outputGenreString = "History";
    //         break;
    //       case 10402:
    //         outputGenreString = "Music";
    //         break;
    //       case 9648:
    //         outputGenreString = "Mystery";
    //         break;
    //       case 10749:
    //         outputGenreString = "Romance";
    //         break;
    //       case 878:
    //         outputGenreString = "Science Fiction";
    //         break;
    //       case 10770:
    //         outputGenreString = "TV Movie";
    //         break;
    //       case 53:
    //         outputGenreString = "Thriller";
    //         break;
    //       case 10752:
    //         outputGenreString = "War";
    //     }

    //     let apiMovieId = data[i].id;

    //     let imgOutputString = data[i].backdrop_path
    //       ? `https://image.tmdb.org/t/p/w500/${data[i].backdrop_path}`
    //       : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png";

    //     let dateOutputString = "1900-01-01";
    //     if (data[i].release_date) {
    //       dateOutputString = data[i].release_date;
    //     }

    //     dbSaveMovie[i] = {
    //       movie_db_id: apiMovieId,
    //       img: imgOutputString,
    //       movie_title: data[i].title,
    //       release_date: dateOutputString,
    //       average_rating: data[i].vote_average,
    //       genre: outputGenreString,
    //       overview: data[i].overview,
    //     };
    //     apiDataService
    //       .insertMovie(req.app.get("db"), dbSaveMovie[i])
    //       .then((data) => {
    //         next();
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    //   }

    })
    .catch((err) => console.log(err));

  // playerDataService
  //   .getAllPlayers(knexInstance)
  //   .then((players) => {
  //     res.json(
  //       movies.map((players) => ({
  //         ...players,
  //       }))
  //     );
  //   })
  //   .catch((err) => {
  //     next(err);
  //   });
});

module.exports = playerRouter;
