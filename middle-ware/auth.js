// authorization function

// authorizin user 

exports.checkUser = (req, res, next, error)=>{
    if (req.session.user.role == 'admin' || 'user') {
        if (error) {
            res.redirect('login/login')
        }
        next()
    } else{
        res.redirect('login/login')
    }
}

// authorizing admin
exports.checkAdmin = (req, res, next)=>{
    if (req.session.user.role == 'admin') {
        next()
    } else{
        redirect('/')
    }
}