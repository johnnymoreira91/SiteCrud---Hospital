var mysql = require('mysql');

var connMysql = function(){
    console.log('Conexao Com BD criada');
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '1234',
        database : 'doctor'
    })
};

module.exports = function(){
    console.log('Modulo BD Carregado com autoload')
    return connMysql
};