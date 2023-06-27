const auth = require('../../middle-ware/auth')
const express = require('express')
const app = express.Router()

// form for sale pages are rendered here with authentication

app.get('/conHome', auth.checkUser, (req, res)=>{
    res.render('contestForm/conHome')
})

module.exports = app
