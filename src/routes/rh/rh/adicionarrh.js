module.exports = function(app){
    app.get('/adicionarrh', function(req,res){
        res.render('rh/rh/adicionarrh', { validacao : {}, rh : {} })
    })
}