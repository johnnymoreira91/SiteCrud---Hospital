module.exports = function(app){
    app.get('/rh', function(req,res){
        res.render('rh/rh')
    })
}