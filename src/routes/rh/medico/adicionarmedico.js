module.exports = function(app){
    app.get('/adicionarmedico', function(req,res){
        res.render('rh/medico/adicionarmedico',{ validacao : {}, rh : {} })
    })
}