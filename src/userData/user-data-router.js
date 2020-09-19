const express = require('express')
const path = require('path')
const userRouter = express.Router()
const jsonBodyParser = express.json()
const userService = require('./user-data-service')
const bcrypt = require('bcrypt')


// All users
userRouter
    .route('/user')
    .get((req, res, next) => {
        // const { users } = {
        //     username,
        //     email,
        //     password
        // }
        userService.getAllUsers(req.app.get('db'))
            .then(user => {
                // res.json(user.map(userService.serializeUser(user)))
                res.json(user)
            })
            .catch(next)
    })
    .post(jsonBodyParser, (req, res, next) => {
        console.log(req.body, 'this is the req body')
        const { username, email, password } = req.body
        for (const field of ['username', 'email', 'password'])
            if (!req.body[field])
                return res.status(400).json({
                    error: `Missing '${field}' in request body`
                })
        const passwordError = userService.validatePassword(password)

        if (passwordError)
            return res.status(400).json({ error: passwordError })
        userService.hasUserWithUserName(
            req.app.get('db'),
            email
        )
            .then(hasUserWithUserName => {
                console.log(hasUserWithUserName, 'this is hasuserwithusername')
                console.log('got this far')
                if (hasUserWithUserName) {
                    console.log('inside if')
                    return res.status(400).json({ error: `Email or username already taken` })
                }

                else {
                    console.log('inside else')
                    return userService.hashPassword(password)
                        .then(hashedPassword => {
                            console.log(hashedPassword, 'this is the hashed pw')
                            const newUser = {
                                username,
                                email,
                                password: hashedPassword,
                            }
                            console.log(req.app.get('db'))
                            return userService.insertUser(
                                req.app.get('db'),
                                newUser
                            )
                                .then(user => {
                                    console.log(user, 'this is the user log')
                                    res.sendStatus(201).json(user)
                                    // .status(201)
                                    // .location(path.posix.join(req.originalUrl, `/${user.id}`))
                                })
                                .catch(err => {
                                    console.log(err)
                                    // res.sendStatus(400).json({ error: `Could not insert user` })
                                })

                        })
                }
            })
            .catch(next)
    })

// Individual users by id
userRouter
    .route('/user/id/:user_id')
    .all((req, res, next) => {
        const { user_id } = req.params;
        userService.getById(req.app.get('db'), user_id)
            .then(user => {
                if (!user) {
                    return res
                        .status(404)
                        .send({ error: { message: `User doesn't exist.` } })
                }
                res.user = user
                next()
            })
            .catch(next)
    })
    .get((req, res) => {
        res.json(userService.serializeUser(res.user))
    })
    .delete((req, res, next) => {
        const { user_id } = req.params;
        userService.deleteUser(
            req.app.get('db'),
            user_id
        )
            .then(numRowsAffected => {
                res.status(204).end()
            })
            .catch(next)
    })

userRouter
    .route('/getidwithusername/:username')
    .all(jsonBodyParser, (req, res, next) => {
        console.log(req.params.username, 'this is the req params')
        const { username } = req.params.username
            .then(userService.getByUsername(req.app.get('db'), username))
    })

module.exports = userRouter