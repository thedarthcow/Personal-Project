require('dotenv').config() //controllers. makes env file available to use
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const authCtrl = require('./authController')
const postCtrl = require('./controller')
const verifyUser = require('./middlewares/verifyUser')

const app = express()
const { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET } = process.env  //setup for sessions


//basic express setup
app.use(express.json()) //parses the body. Converts data to a more readable format in json
app.use(
    session({ //high level middleware
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 1000 * 60 * 60 * 24 * 365 }, //sets max amount of time the website will store login info
    })
) 

//auth endpoints
//login, register, logout, getUser
app.post('/auth/register', authCtrl.register)
app.post('/auth/login' , authCtrl.login)
app.delete('/auth/logout' , authCtrl.logout)
app.get('/auth/user' , authCtrl.getUser) 

//posts endpoints. 
//get, post, put, delete posts
app.get('/api/posts', verifyUser, postCtrl.getPosts) //by adding verifyUser I am requiring the user to be logged in to post.
app.post('/api/posts', verifyUser, postCtrl.addPost)
app.put('/api/posts/:post_id', verifyUser, postCtrl.editPost)
app.delete('/api/posts/:post_id', verifyUser, postCtrl.deletePost) 

//get post put delete posts
massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false },
  }).then((dbInstance) => {
    app.set('db', dbInstance)
    console.log("DB is connected cap'n")
    app.listen(SERVER_PORT, () =>
      console.log(`Crunchatize me on port ${SERVER_PORT}`)
    )
  })