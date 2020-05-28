module.exports = function(app){

    app.get('/deletarrh',function(req,res){
        res.render('rh/rh/deletarrh');
});

    app.post('/deletarrh', function(req,res){
        //var rh = req.body;

        //console.log(req.body.id);
        

    
       /* req.assert('password_medico','Password do Médico é Obrigatorio').notEmpty();

        var erros = req.validationErrors();

        if(erros){
            // res.render('addnoticia', {validacao: erros, noticia: {} });
            res.render('rh/medico/adicionarmedico', {validacao : erros, rh : rh});
             return ;
         }
*/
        var connection = app.config.dbConnection();
        var sqlrh = app.src.model.sqlmodel;

        sqlrh.DeleteRH2(connection, function(error, result){
            res.redirect('/consultarrh')
        })
    })
};