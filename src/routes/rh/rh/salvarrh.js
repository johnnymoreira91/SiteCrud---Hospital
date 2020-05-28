module.exports = function(app){

    app.get('/rhsalvar',function(req,res){
        res.render('rh/rh/adicionarrh', {validacao : {} ,rh : {}});
});

    app.post('/rhsalvar', function(req,res){
        var rh = req.body;

        req.assert('nome_rh','Nome é obrigatorio').notEmpty();
        req.assert('login_rh','Login é obrigatorio').notEmpty();
        req.assert('password_rh','Password é obrigatorio').notEmpty();
        req.assert('salario_rh','Salario é obrigatorio').notEmpty();

        var erros = req.validationErrors();

        if(erros){
            // res.render('addnoticia', {validacao: erros, noticia: {} });
            res.render('rh/rh/adicionarrh', {validacao : erros, rh : rh});
             return ;
         }

        var connection = app.config.dbConnection();
        var sqlrh = app.src.model.sqlmodel;

        sqlrh.SendRH(rh, connection, function(error, result){
            res.redirect('/rh')
        })
    })
};