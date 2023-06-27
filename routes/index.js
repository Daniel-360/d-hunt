const express = require('express')
const app = express.Router()
app.use('/public', express.static('public'))

const loginController = require('../controllers/login')
// const login = 
// const user = 
// const conform = 

app.use('/login', require('./handlers/login.js'))
// app.use('/login', require('./handlers/user.js'))
app.use('/conform', require('./handlers/conform.js'))

app.post('/login', loginController.checkLogin)


module.exports = app