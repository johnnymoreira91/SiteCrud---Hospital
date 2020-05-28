module.exports = function(app){
    app.post('/salvarmedico', function(req,res){
        var rh = req.body;

        req.assert('nome_medico','Nome do Médico é Obrigatorio').notEmpty();
        req.assert('especialidade_medico','Especialidade do Médico é Obrigatorio').notEmpty();
        req.assert('crm','CRM do Médico é Obrigatorio').notEmpty();
        req.assert('salario_medico','Salario do Médico é Obrigatorio').notEmpty();
        req.assert('login_medico','Login do Médico é Obrigatorio').notEmpty();
        req.assert('password_medico','Password do Médico é Obrigatorio').notEmpty();

        var erros = req.validationErrors();

        if(erros){
            // res.render('addnoticia', {validacao: erros, noticia: {} });
            res.render('rh/medico/adicionarmedico', {validacao : erros, rh : rh});
             return ;
         }

        var connection = app.config.dbConnection();
        var sqlrh = app.src.model.sqlmodel;

        sqlrh.SendMedico(rh, connection, function(error, result){
            res.redirect('/rh')
        })
    })
};