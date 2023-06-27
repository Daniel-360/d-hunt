// rendering authorize user

let express = require('express')
let app = express.Router()
let auth = require('../../middle-ware/auth')
app.get('/profile', auth.user, (req, res)=>{
    res.render('profile', {data: req.session.user})
})

module.exports = app