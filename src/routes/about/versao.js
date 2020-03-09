module.exports = function(app){
    app.get('/versao', function(req,res){
        res.render('about/versao');
    })
}