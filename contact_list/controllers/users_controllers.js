module.exports.profile = function(req,res){
    return res.render('user_profile',{
        title:'user profile'
    })
}


module.exports.signUp = function(req,res){
    return res.render('user_signup',{
        title:"ohh yes ! Sign Up"
    })
}

module.exports.signIn = function(req,res){
    return res.render('user_signin',{
        title:"ohh yes ! Sign In"
    })
}