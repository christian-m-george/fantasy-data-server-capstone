const knex = require('knex')
const xss = require('xss')
const app = require('../src/app')
const helpers = require('./test-helpers.js')
const { playerStore } = require('./player-store')


describe('Movie endpoints', () => {
    let db

    const movies = helpers.makePlayersArray()
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

    describe('GET /movie/all', () => {

        context(`returns all movies`, () => {
            beforeEach('insert movies', () =>
                helpers.seedMovies(
                    db,
                    movies,
                )
            )
            it(`responds with 200 and a list`, () => {
                // const validUser = testUsers[0]
                return supertest(app)
                    .get(`/api/movies/movie/all`)
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
