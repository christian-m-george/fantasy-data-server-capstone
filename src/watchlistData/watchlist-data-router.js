const express = require('express')
const watchlistRouter = express.Router()
const jsonParser = express.json()
const watchlistDataService = require('./watchlist-data-service')

watchlistRouter
    .route('/')
    //relevant
    .get((req, res, next) => {
        const knexInstance = req.app.get('db')
        watchlistDataService.getWatchlist(knexInstance)
            .then(watchlists => {
                res.json(watchlists)
            })
            .catch(next)
    })
    //relevant
    .post(jsonParser, (req, res, next) => {
        const { userId, playerId } = req.body
        const newPlayer = { user_id: userId, player_id: playerId }
        console.log(newPlayer, 'this is the watchlist post data')

        for (const [key, value] of Object.entries(newPlayer))
            if (value == null)
                return res.status(400).json({
                    error: {
                        message: `Missing '${key}' in request body`
                    }
                })

        watchlistDataService.insertPlayer(
            req.app.get('db'),
            newPlayer
        )
            .then(watchlist => {
                res
                    .status(201)
                    .json(watchlist)
            })
            .catch(next)
    })

watchlistRouter
    .route('/:watchlist_id')
    .all((req, res, next) => {
        if (isNaN(parseInt(req.params.watchlist_id))) {
            return res.status(404).json({
                error: {
                    message: `Invalid id`
                }
            })
        }
        watchlistDataService.getWatchlistById(
            req.app.get('db'),
            req.params.watchlist_id
        )
            .then(watchlist => {
                if (!watchlist) {
                    return res.status(404).json({
                        error: {
                            message: `Watchlist doesn't exist`
                        }
                    })
                }
                res.watchlist = watchlist
                next()
            })
            .catch(next)
    })
    .get((req, res, next) => {
        res.json(res.watchlist)
    })

watchlistRouter
    .route('/:watchlist_id/:player_id')
    .delete((req, res, next) => {
        console.log('hitting right path')
        const { watchlist_id, player_id } = req.params
        console.log(req.params, 'this is the params')
        watchlistDataService.deletePlayer(
            req.app.get('db'),
            watchlist_id,
            player_id
        )
        .then(() => {
            res.status(204).end()
        })
        .catch(next)
    })







module.exports = watchlistRouter