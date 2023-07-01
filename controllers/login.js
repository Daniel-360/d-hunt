// authentication function is here
const { request } = require('http')
let userData = require('../model/userData')
let users = require('../model/userSchema')

// sign in authentication below
exports.checkLogin = (req, res) => {
    req.session.isLogin = 0

    users.findOne({ email: req.body.email })
        .then((users) => {
            if (!users) {
                req.session.error = 'not a user'
                res.send('/login/login')
                return
            }


            if (users.password !== req.body.password) {
                req.session.error = 'incorrect password'
                res.send('/login/login')
                return
            }
            req.session.isLogin = 1
            req.session.email = req.body.email
            req.session.role = users.role
            req.session.tel = users.tel
            req.session.username = req.body.username
            req.session.surname = req.body.surname
            res.send('/login/home')
        })
}

// sign up authentication below using mongo db
exports.signUp = (req, res) => {
    req.session.isLogin = 0
    // const {email, tel, password, confirmPass} = req.body
    // check if passwords are the same

    if (req.body.password == req.body.confirmPass) {
        console.log(req.body.password, req.body.confirmPass);

        users.exists({ email: req.body.email })
            .then((exists) => {
                if (exists) {
                    req.session.error = 'email already exist'
                    res.send('/login/signUp');
                }
                // Create a new user
                let newUser = new users({
                    email: req.body.email,
                    tel: req.body.tel,
                    password: req.body.password,
                    name: req.body.username,
                    surname: req.body.surname,
                    role: 'user'
                })
                // Save the user to the database
                return newUser.save();
            })
            .then(() => {
                req.session.isLogin = 1
            req.session.email = req.body.email
            req.session.role = users.role
            req.session.tel = users.tel
            req.session.username = req.body.username
            req.session.surname = req.body.surname
                res.redirect('/login/home');
            })
            .catch((error) => {
                res.status(500).json({ error: 'Sign up failed' });
            });
    } else {
        req.session.error = 'password not the same'
        res.redirect('/login/signUp')
    }
}