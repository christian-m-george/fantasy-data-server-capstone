const express = require('express')
const path = require('path')
const watchlistRouter = express.Router()
const jsonParser = express.json()
const watchlistDataService = require('./watchlist-data-service')

watchlistRouter
    .route('/watchlist/1')
    .get(jsonParser, (req, res, next) => {
        const { user_id } = req.body
        watchlistDataService.getWatchlistByUserId(req.app.get('db'), user_id)
            .then(user => {
                res.json(user)
            })
            .catch(next)
    })
    .post(jsonParser, (req, res, next) => {
        const { userId, playerId } = req.body
        const newPlayer = { user_id: userId, player_id: playerId }

        for (const [key, value] of Object.entries(newPlayer))
            if (value == null)
                return res.status(400).json({
                    error: { message: `Missing '${key}' in request body` }
                })

        watchlistDataService.insertPlayer(
            req.app.get('db'),
            newPlayer
        )
            .then(response => {
                res
                    .status(201)
                    .json(response)
            })
            .catch(next)
    })
    .delete(jsonParser, (req, res, next) => {
        const { user_id, player_id } = req.body
        watchlistDataService.deletePlayer(req.app.get('db'), user_id, player_id)
            .then(user => {
                res.json(user)
            })
            .catch(next)
    })


module.exports = watchlistRouter