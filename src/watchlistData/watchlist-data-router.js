const express = require('express')
const path = require('path')
const watchlistRouter = express.Router()
const jsonParser = express.json()
const watchlistDataService = require('./watchlist-data-service')

//  watchlistRouter
// .route('/watchlist/1')
// .get(jsonParser, (req, res, next) => {
//     const { user_id } = req.body
//     watchlistDataService.getWatchlistByUserId(req.app.get('db'), user_id)
//         .then(user => {
//             res.json(user)
//         })
//         .catch(next)
// })
// .post(jsonParser, (req, res, next) => {
//     const { userId, playerId } = req.body
//     const newPlayer = { user_id: userId, player_id: playerId }

//     for (const [key, value] of Object.entries(newPlayer))
//         if (value == null)
//             return res.status(400).json({
//                 error: { message: `Missing '${key}' in request body` }
//             })

//     watchlistDataService.insertPlayer(
//         req.app.get('db'),
//         newPlayer
//     )
//         .then(response => {
//             res
//                 .status(201)
//                 .json(response)
//         })
//         .catch(next)
// })
// .delete(jsonParser, (req, res, next) => {
//     const { user_id, player_id } = req.body
//     watchlistDataService.deletePlayer(req.app.get('db'), user_id, player_id)
//         .then(user => {
//             res.json(user)
//         })
//         .catch(next)
// })


















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
        const {
            title,
            completed = false
        } = req.body
        const newWatchlist = {
            title
        }

        for (const [key, value] of Object.entries(newWatchlist))
            if (value == null)
                return res.status(400).json({
                    error: {
                        message: `Missing '${key}' in request body`
                    }
                })

        newWatchlist.completed = completed;

        watchlistDataService.insertPlayer(
            req.app.get('db'),
            newWatchlist
        )
            .then(watchlist => {
                res
                    .status(201)
                    .location(path.posix.join(req.originalUrl, `/${watchlist.id}`))
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
    //relevant
    .delete((req, res, next) => {
        watchlistDataService.deletePlayer(
            req.app.get('db'),
            req.params.watchlist_id
        )
            .then(numRowsAffected => {
                res.status(204).end()
            })
            .catch(next)
    })











module.exports = watchlistRouter