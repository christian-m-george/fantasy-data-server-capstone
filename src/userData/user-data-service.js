const xss = require('xss')
const bcrypt = require('bcrypt')

const userService = {
    serializeUser(user) {
        return {
            id: user.id,
            username: xss(user.username),
            email: xss(user.email),
        }
    },
    getAllUsers(knex) {
        return knex.select('*').from('users')
    },
    hasUserWithUserName(db, email) {
        return db('users')
            .where({ email })
            .first()
            .then(user => user)
    },
    insertUser(db, newUser) {
        return db
            .insert(newUser)
            .into('users')
            .returning('*')
            .then(user => user)
    },
    validatePassword(password) {
        if (password.length < 6) {
            return 'Password must be longer than 6 characters'
        }
        if (password.length > 72) {
            return 'Password must be less than 72 characters'
        }
        if (password.startsWith(' ') || password.endsWith(' ')) {
            return 'Password must not start or end with empty spaces'
        }
    },
    hashPassword(password) {
        let hashedPassword = bcrypt.hash(password, 12);
        console.log(hashedPassword, 'this is hashedPW from service')
        return hashedPassword
    },
    deleteUser(knex, id) {
        return knex('users')
            .where({ id })
            .delete()
    },
    getById(knex, id) {
        return knex
            .from('users')
            .select('*')
            .where('id', id)
            .first()
    },
    getByUsername(knex, username) {
        return knex
            .from('users')
            .select('id')
            .where('username', username)
            .first()
    }
}

module.exports = userService