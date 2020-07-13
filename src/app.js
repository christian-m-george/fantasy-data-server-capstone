require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const { NODE_ENV } = require('./config')
const helmet = require('helmet')
const errorHandler = require('./middleware/error-handler')
const playerDataRouter = require('./playerData/player-data-router')
const playerDetailRouter = require('./playerDetailData/player-detail-router')
const watchlistRouter = require('./watchlistData/watchlist-data-router')
const userRouter = require('./userData/user-data-router')


const app = express()

const morganOption = (NODE_ENV === 'production')    
    ? 'tiny'
    : 'common';

app.use(morgan(morganOption))
app.use(cors())
app.use(helmet())


app.get('/', (req, res) => {
    res.send('Hello, world!')
})

app.use('/api/player-data', playerDataRouter)
app.use('/api/player-detail', playerDetailRouter)
app.use('/api/watchlist', watchlistRouter)
app.use('/api/user', userRouter)


app.use(errorHandler)


app.use(function errorHandler(error, req, res, next) {
    let response
    if (NODE_ENV === 'production') {
        response = { error: { message: 'server error' } }
    } else {
        console.error(error)
        response = { message: error.message, error }
    }
    res.status(500).json(response)
})

module.exports = app