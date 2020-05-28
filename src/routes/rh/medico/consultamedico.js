module.exports = function(app){
    app.get('/consultarmedico', function(req, res){

        var connection = app.config.dbConnection();
        var sqlrh = app.src.model.sqlmodel;

        sqlrh.getMedico(connection, function(error, result){
            res.render('rh/medico/consultarmedico',{doc : result});
        })


       // res.render('rh/medico/consultarmedico')
    })
}