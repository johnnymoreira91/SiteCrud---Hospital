module.exports = function(app){
    app.get('/secretaria', function(req,res){
        res.render('secretaria/secretaria')
    })
}