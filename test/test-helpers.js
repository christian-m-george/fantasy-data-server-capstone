const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

function makeUsersArray() {
    return [
        {
            id: 1,
            username: 'userone',
            email: 'testuser1@gmail.com',
            password: 'password1',
        },
        {
            id: 2,
            username: 'usertwo',
            email: 'testuser2@gmail.com',
            password: 'password1',
        },
        {
            id: 3,
            username: 'userthree',
            email: 'testuser3@gmail.com',
            password: 'password1',
        },
        {
            id: 4,
            username: 'userfour',
            email: 'testuser4@gmail.com',
            password: 'password',
        },
    ]
}

function makePlayersArray() {
    return (
        {
            "PlayerID": 18877,
            "Name": "Christian McCaffrey",
            "Team": "CAR",
            "Position": "RB",
            "AverageDraftPosition": 1.7,
            "AverageDraftPositionPPR": 1.5,
            "ByeWeek": 13,
            "LastSeasonFantasyPoints": 28.8,
            "ProjectedFantasyPoints": 352.5
        }
    )

}



function makeExpectedMovie(users, movie = []) {
    const user = users
        .find(user => user.id == movie.user_id)
    return {
        serializeMovie(movie) {
            return {
                id: movie.id,
                intensity: movie.intensity,
                location: movie.location,
                onset: movie.onset,
                symptom: movie.symptom,
                time: movie.time,
                trigger: movie.trigger,
                symptom: movie.symptom,
                treatment: movie.treatment,
                comment: xss(movie.comment),
            }
        }
    }
}

function makeMoviesFixtures() {
    const testUsers = makeUsersArray()
    const testMovies = makeMoviesArray()
    return { testUsers, testMovies }
}

function cleanTables(db) {
    return db.transaction(trx =>
        trx.raw(`TRUNCATE players, users CASCADE`)
            // .then(() =>
                // Promise.all([
                //     trx.raw(`ALTER SEQUENCE id minvalue 0 START WITH 1`),
                //     trx.raw(`ALTER SEQUENCE id minvalue 0 START WITH 1`),
                //     trx.raw(`SELECT setval('id', 0)`),
                //     trx.raw(`SELECT setval('id', 0)`),
                // ])
            // )
    )
}

function seedMovies(db, movies = []) {
    // use a transaction to group the queries and auto rollback on any failure
    return db.transaction(trx =>
        trx.into('movies').insert(movies)            
    )
    // return seedUsers(db, movies)
    // .then(() =>
    //     db
    //         .into('movies')
    //         .insert(movies)
    // )
    // return db.transaction(async trx => {
    //     await seedMovies(trx, movies)
    //     await trx.into('movies').insert(movies)
        // update the auto sequence to match the forced id values
        // await trx.raw(
        //     `SELECT setval('movies_id_seq', ?)`,
        //     [movies[movies.length - 1].id],
        // )
    // })
}

function seedUsers(db, users) {
    // console.log(users, 'this should be users log')
    const preppedUsers = users.map(user => ({
        ...user,
        password: bcrypt.hashSync(user.password, 1)
    }))
    return db.into('users').insert(preppedUsers)
        .then(() =>
            // update the auto sequence to stay in sync
            db.raw(
                `SELECT setval('users_id_seq', ?)`,
                [users[users.length - 1].id],
            )
        )
}



function seedPosts(db, posts) {
    // console.log(users, 'this should be users log')
    // const preppedUsers = users.map(user => ({
    //     ...user,
    //     password: bcrypt.hashSync(user.password, 1)
    // }))
    return db.into('posts').insert(posts)
        .then(() =>
            // update the auto sequence to stay in sync
            db.select('*').from('posts')
        )
}


function makeAuthHeader(user, secret = process.env.JWT_SECRET) {
    const token = jwt.sign({ user_id: user.id }, secret, {
        subject: user.email,
        algorithm: 'HS256',
    })
    return `bearer ${token}`
}

module.exports = {
    makePlayersArray,
    seedMovies,
    makeMoviesFixtures,
    makeUsersArray,
    cleanTables,
    makeAuthHeader,
    seedUsers,
    seedPosts,
    makeExpectedMovie,
}