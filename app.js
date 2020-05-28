var app = require('./config/server');


/*
app.use(function (req, res, next) {
    res.status(404).render('rh/rh/notfound')//send("Sorry can't find that!")
})*/

app.listen(3000, function(){
    console.log('Servidor ON')
});