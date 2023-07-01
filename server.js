const bodyParser = require("body-parser");
const express = require("express");
const path = require('path')
const app = express()
const port = 4000
const engine = require("ejs-mate");
require('dotenv').config()

const session = require('express-session')
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: true
}))

require('./config/mongo')

app.use('/public', express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())


// view engine ejs
app.engine("ejs", engine);
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'/public')))

// rendering routes
app.use('/', require('./routes/'))

app.get('/', (req, res)=>{
    res.render('homepage', {
        data: req.session || null,
        message: req.session.error,
    })
    console.log(req.session.isLogin);
    // res.sendFile(__dirname + '../public/blog.html')
})

app.listen(port, ()=>{console.log('server on @ ' + port);})