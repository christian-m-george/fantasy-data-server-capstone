require('dotenv').config()
const { TEST_DATABASE_URL } = require('../src/config')
const knex = require('knex')
// const xss = require('xss')
const app = require('../src/app')
const helpers = require('./test-helpers.js')
// const { playerStore } = require('./player-store')


describe('watchlist endpoints', () => {
    let db

    before('make knex instance', () => {
        db = knex({
            client: 'pg',
            connection: TEST_DATABASE_URL,
        })
        app.set('db', db)
    })

    after('disconnect from db', () => db.destroy())

    before('cleanup', () => helpers.cleanTables(db))

    afterEach('cleanup', () => helpers.cleanTables(db))

    describe('GET watchlist/', () => {

        context(`returns all watchlist players`, () => {
            beforeEach('insert players', () =>
                helpers.seedWatchlist(
                    db,
                    watchlist,
                )
            )
            it(`responds with 200 and a list`, () => {
                // const validUser = testUsers[0]
                return supertest(app)
                    .get(`api/watchlist`)
                    // .set('Authorization', helpers.makeAuthHeader(validUser))
                    .expect(200)
                    .expect(res => {
                        expect(res.body).to.be.a('array');
                    });
            })
        })
    })
})
