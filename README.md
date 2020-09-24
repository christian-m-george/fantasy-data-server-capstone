# Fantasy Data Capstone

FantasyData allows users to access a large database of fantasy football statistics on players on their team or for research on hopeful draft picks! The data is historical and current, and gives a macro level view of a player's performance in seasons past along with some statistics forecasting future performance. Use this to get a leg up on your league mates!

## Working Prototype
You can access a working prototype of the react app here: https://fantasy-data-react-capstone.vercel.app/

## User Stories

* As a new user, I want create an account and login. HIGH IMPORTANCE
* As a new user, I want to be able to search for fantasy data on specific players. HIGH IMPORTANCE
* As a new user, I want to be able to access visual representations of the data. HIGH IMPORTANCE
* As a new user, I want to be able to compare and contrast player data. MEDIUM IMPORTANCE
* As a new user, I want to be able to add players to a watch list. HIGH IMPORTANCE
* As a returning user, I want to be able to access my watch lists and edit them. HIGH IMPORTANCE
* As a returning user, I want to have my previous search history easily accesible. LOW IMPORTANCE
* As a returning user, I want to see data I have not seen before. MEDIUM IMPORTANCE
* As an administrator, I want to have access to settings from individual acccounts. LOW IMPORTANCE
* As an administrator, I want to be able to refresh the player data. HIGH IMPORTANCE*

#### Landing Page
* as a visitor
* I want to understand what I can do with this app (or sign up, or log in) so I can decide if I want to use it

#### Sign Up
* as a visitor
* I want to register to use this app so I can create a list of players to keep tabs on

### Wireframe
Register Wireframe
https://repl.it/join/sgmtmvhv-christiangeorge 
User enters username and confirms password -> if criteria is not met an alert is generated -> once criteria is met user is directed to login

Login Wireframe
https://repl.it/join/igyjbgia-christiangeorge
User enters username and confirms password -> if criteria is not met an alert is generated -> once criteria is met user is directed to homepage

Homepage Wireframe
https://repl.it/join/fuppmiii-christiangeorge
User is able to navigate by nav bar at the top -> user can search for players using different search methods -> search methods will take user to player wireframes, listing different players that match search criteria

Player Wireframe
https://repl.it/join/oqosezmo-christiangeorge
User is still ablet to navigate with nav bar at top and user is also able to see a breakdown of player stats, past and projected -> stats are clickable for further details -> user can click and add the player to a watchlist specific to that user

Watchlist Wireframe
https://repl.it/join/vbuayxuu-christiangeorge
User is able to navigate from top nav bar and see their list of players that have been added to watchlist -> user can manage their watchlist my moving players up and down as wellas removing them

## Screenshots
Landing/Login Page |
:-------------------------:|
![Login Page](/github-images/login-screenshot.png)  | 
Register Page |
:-------------------------:|
![Register Page](/github-images/register-screenshot.png)  | 
Home Page |
:-------------------------:|
![Home Page](/github-images/home-screenshot.png)  | 
Watchlist Page |
:-------------------------:|
![Watchlist Page](/github-images/watchlist-screenshot.png)  | 


## API Endpoints

### Login
Logs user in
### URL
/auth/login
### Method:
POST
### URL Params
Required:
email=[string]
password=[string]
### Success Response:
Code: 200
Content: {
  AuthToken: AuthService.createJwt(sub, payload),
  userId: dbUser.id
}
### Error Response:
Code: 404 NOT FOUND
Content: { error : "Missing field in request body" }
### Sample Call:
  $.ajax({
    url: "/auth/login",
    dataType: "json",
    type : "POST",
    params: {
      email, password
    }
    success : {
      AuthToken, userId
    }
  });

### Player List
Returns list of players and some data on those players
### URL
/player/all
### Method:
GET
### URL Params
none
### Success Response:
Code: 200
Content: {
  PlayerID: checkInteger(player.PlayerID),
  Name: checkString(player.Name),
  Team: checkString(player.Team),
  Position: checkString(player.Position),
  AverageDraftPosition: player.AverageDraftPosition,
  AverageDraftPositionPPR: player.AverageDraftPositionPPR,
  ByeWeek: checkInteger(player.ByeWeek),
  LastSeasonFantasyPoints: player.LastSeasonFantasyPoints,
  ProjectedFantasyPoints: player.ProjectedFantasyPoints
}
### Error Response:
Code: 400
### Sample Call:
  $.ajax({
    url: "/player/all",
    dataType: "json",
    type : "GET",
    params: none
    success : {
      Player object
    }
  });

### Player Details
Returns detailed statistics based on player ID
### URL
/player/details/season/:PlayerId
### Method:
GET
### URL Params
Required:
PlayerID
### Success Response:
Code: 200
### Error Response:
Code: 400
### Sample Call:
  $.ajax({
    url: "/player/details/season/18877",
    dataType: "json",
    type : "GET",
    params: PlayerId
    success : {
      Player object
    }
  });

### Post User
Adds user to database
### URL
/user
### Method:
POST
### URL Params
Required:
Username
Email
Password
### Success Response:
Code: 202
### Error Response:
Code: 400
### Sample Call:
  $.ajax({
    url: "/user",
    dataType: "json",
    type : "POST",
    params: username, email, password
    success : 202
  });

### Post to watchlist
Adds a player to watchlist
### URL
/watchlist
### Method:
POST
### URL Params
Required:
User ID
Player ID
### Success Response:
Code: 202
### Error Response:
Code: 400
### Sample Call:
  $.ajax({
    url: "/user",
    dataType: "json",
    type : "POST",
    params: userId, playerId
    success : 202
  });

### Get Watchlist
Retrieves user's watchlist based on User ID
### URL
/:watchlist_id/:player_id
### Method:
GET
### URL Params
Required:
User ID
### Success Response:
Code: 200
### Error Response:
Code: 400
### Sample Call:
  $.ajax({
    url: "/user",
    dataType: "json",
    type : "Get",
    params: userId
    success : 200
    Watclist Object
  });


## Functionality
The app's functionality includes:

* Every User has the ability to create an account that stores information unique to them
* User can research players and see statistics on historical performance and fantasy statistics such as ADP
* User can add players to Watchlist

## Business Objects (database structure)
* User (collection)
    * ID
    * Email
    * Password
    * First name
    * Last name
* Player
    * Team
    * Player Name
    * Position
    * ADP
    * ADP PPR
    * Bye Week
    * Last Season Fantasy Points
    * Projected Fantasy Points
* Watchlist
    * User ID
    * Player Name
    * Player Team
    * Player Position



## Technology
* Front-End: HTML5, CSS3, JavaScript ES6, jQuery
* Back-End: Node.js, Express.js, Mocha, Chai, RESTful API Endpoints, MongoDB, Mongoose
* Development Environment: Heroku, mLab, Robo 3T

## Responsive
App is built to be usable on mobile devices, as well as responsive across mobile, tablet, laptop, and desktop screen resolutions.

## Development Roadmap
This is v1.0 of the app, but future enhancements are expected to include:
* Wishlist (from the inventory page part details);
        (1) see how many parts there are in the Wishlist

## How to run it
Use command line to navigate into the project folder and run the following in terminal

### Local Node scripts
* To install the node project ===> npm install
* To migrate the database ===> npm run migrate -- 1
* To run Node server (on port 8000) ===> npm run dev
* To run tests ===> npm run test

### Local React scripts
* To install the react project ===> npm install
* To run react (on port 3000) ===> npm start
* To run tests ===> npm run test
