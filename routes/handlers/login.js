// post method are deliver here for authentication

const express = require('express')
const app = express.Router()
const loginController = require('../../controllers/login')
const auth = require('../../middle-ware/auth')
app.use('/public', express.static('public'))

app.get('/login', (req, res)=>{
    res.render('login', {data: req.session || null, message: req.session.error})
})

app.get('/signUp', (req, res)=>{
    res.render('signUp/email', {data: req.session || null, message: req.session.error})
})

app.get('/logout', auth.checkUser, (req, res)=>{
    req.session.isLogin = 0
    req.session.destroy()
    res.redirect('/')
} )
app.get('/home', auth.checkUser, (req, res)=>{
    res.render('profile', {data: req.session})
})

app.post('/signUp', loginController.signUp)
app.post('/login', loginController.checkLogin)


module.exports = app