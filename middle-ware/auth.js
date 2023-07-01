// authorization function

// authorizin user 

exports.checkUser = (req, res, next)=>{
    if (req.session.role == 'admin' || 'user') {
        next()
        return
    }
    res.redirect('login/login')

}

// authorizing admin
exports.checkAdmin = (req, res, next)=>{
    if (req.session.role == 'admin') {
        next()
        return
    }
    res.redirect('/')
    
}