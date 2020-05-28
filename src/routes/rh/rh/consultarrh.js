module.exports = function(app){
    app.get('/consultarrh', function(req,res){

        var connection = app.config.dbConnection();
        var sqlrh = app.src.model.sqlmodel;

        sqlrh.getRh(connection, function(error, result){
            res.render('rh/rh/consultarrh',{rh : result});
        })

       // res.render('rh/rh/consultarrh')
    })
}