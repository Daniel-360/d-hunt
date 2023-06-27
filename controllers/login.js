// authentication function is here
let userData = require('../model/userData')
let users = require('../model/userSchema')

exports.demoLogin = (req, res) => {
    req.session.isLogin = 0; // asignin value 0 to session if not login
    // req.session.error = null
    if (req.session.isLogin != 0) {
        // res.send('user already logged in')
        req.session.error = 'user is already login'
        res.redirect('/login/login')
    } else {
        // req.session.isLogin = 1;
        let user = userData.find((user) => user.email === req.body.email)

        if (!user) {
            req.session.error = 'not a user pls sign up below'
            res.redirect('/login')
            // req.session.isLogin = 0
        } else {
            if (user.password !== req.body.password) {
                req.session.error = 'incorrect password'
                res.redirect('/login/login')
            } else {
                req.session.isLogin = 1
                req.session.error = null
                req.session.username = user.username
                req.session.email = user.email
                req.session.password = user.password
                req.session.role = user.role
                // res.redirect('login/home')
                res.send('backend working')
            }
        }
    }
}


exports.checkLogin = (req, res) => {
    req.session.isLogin = 0

    users.findOne({ email: req.body.email })
        .then((users) => {
            if (!users) {
                res.send('not a user pls sign up')
            } else {

                if (users.password !== req.body.password) {
                    req.session.error = 'incorrect password'
                    res.redirect('/login/login')
                }
                req.session.isLogin = 1
                req.session.email = req.body.email
                req.session.role = users.role
                req.session.tel = users.tel
                console.log(users);
                // res.redirect('/login/home')
                res.send('/login/home')
                // res.send('backend working')
            }

        })
}

exports.signUp = (req, res) => {
    req.session.isLogin = 0
    // const {email, tel, password, confirmPass} = req.body
    // check if passwords are the same

    if (req.body.password == req.body.confirmPass) {
        console.log(req.body.password, req.body.confirmPass);

        users.exists({ email: req.body.email })
            .then((exists) => {
                if (exists) {
                    res.send('email already exist pls sign in');
                }
                // Create a new user
                let newUser = new users({
                    email: req.body.email,
                    tel: req.body.tel,
                    password: req.body.password,
                    role: 'user'
                })
                // Save the user to the database
                return newUser.save();
            })
            .then(() => {
                res.redirect('/login/home');
            })
            .catch((error) => {
                res.status(500).json({ error: 'Sign up failed' });
            });
    } else {
        req.session.error = 'password not the same'
        res.send('/login/signUp')
    }

}



