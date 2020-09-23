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





// function makeWatchlistArray(users, player = []) {
//     const user = users
//         .find(user => user.id == player.user_id)
//     return {
//         serializePlayer(player) {
//             return {
                
//             }
//         }
//     }
// }

function makeExpectedPlayer(users, player = []) {
    const user = users
        .find(user => user.id == player.user_id)
    return {
        serializePlayer(player) {
            return {
                playerId: player.PlayerID,
                name: player.Name,
                team: player.Team,
                position: player.Position,
                AverageDraftPosition: player.AverageDraftPosition,
                AverageDraftPositionPPR: Aplayer.verageDraftPositionPPR,
                byeWeek: player.ByeWeek,
                lastSeasonFantasyPoints: player.LastSeasonFantasyPoints,
                projecedFantasyPoints: player.ProjectedFantasyPoints
            }
        }
    }
}

function makePlayersFixtures() {
    const testUsers = makeUsersArray()
    const testPlayers = makePlayersArray()
    return { testUsers, testPlayers }
}

function cleanTables(db) {
    // console.log(db, 'this should be string for db')
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

function seedPlayers(db, players = []) {
    // use a transaction to group the queries and auto rollback on any failure
    return db.transaction(trx =>
        trx.into('players').insert(players)            
    )
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
    return db.into('watchlist').insert(posts)
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
    seedPlayers,
    makePlayersFixtures,
    makeUsersArray,
    cleanTables,
    makeAuthHeader,
    seedUsers,
    makeExpectedPlayer,
}