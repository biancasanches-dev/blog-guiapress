function adminAuth(req, res, next){
    if(req.session.user != undefined){
        next();
    }else{
        const redirectTo = req.originalUrl; // Obter a URL da página solicitada anteriormente
        req.session.redirectTo = redirectTo; // Armazenar a URL na sessão
        res.redirect('/login');
    }
}

module.exports = adminAuth;