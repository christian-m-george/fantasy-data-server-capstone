const knex = require('knex')
const xss = require('xss')
const app = require('../src/app')
const helpers = require('./test-helpers.js')
const { playerStore } = require('./player-store')


describe('Player endpoints', () => {
    let db

    const players = helpers.makePlayersArray()
    // console.log(movies)

    before('make knex instance', () => {
        db = knex({
            client: 'pg',
            connection: process.env.TEST_DATABASE_URL,
        })
        app.set('db', db)
    })

    after('disconnect from db', () => db.destroy())

    before('cleanup', () => helpers.cleanTables(db))

    afterEach('cleanup', () => helpers.cleanTables(db))

    describe('GET /player/all', () => {

        context(`returns all players`, () => {
            beforeEach('insert players', () =>
                helpers.seedMovies(
                    db,
                    players,
                )
            )
            it(`responds with 200 and a list`, () => {
                // const validUser = testUsers[0]
                return supertest(app)
                    .get(`/api/player/players/all`)
                    // .set('Authorization', helpers.makeAuthHeader(validUser))
                    .expect(200)
                    .expect(res => {
                        expect(res.body).to.be.a('array');
                    });
            })
        })

        // context('Given there are records in the database', () => {
        //     beforeEach('insert records', () =>
        //         helpers.seedRecordsTables(
        //             db,
        //             testUsers,
        //             testRecords
        //         )
        //     )
        // })
    })
})
