require('dotenv').config()
const { TEST_DATABASE_URL } = require('../src/config')
const knex = require('knex')
const xss = require('xss')
const app = require('../src/app')
const helpers = require('./test-helpers.js')
const { playerStore } = require('./player-store')


describe('Player endpoints', () => {
    let db

    const players = helpers.makePlayersArray()

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

    describe('GET /player/players', () => {

        context(`returns all players`, () => {
            beforeEach('insert players', () =>
                helpers.seedPlayers(
                    db,
                    players,
                )
            )
            it(`responds with 200 and a list`, () => {
                // const validUser = testUsers[0]
                return supertest(app)
                    .get(`/api/player/players`)
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
