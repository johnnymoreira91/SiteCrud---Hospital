module.exports = function(app){
    app.get('/logout', function(req,res){
        res.render('index')
    })
}