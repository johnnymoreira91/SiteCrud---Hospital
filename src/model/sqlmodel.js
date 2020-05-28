module.exports = function(){

    this.SendRH = function(rh,connection, callback){
        connection.query('insert into rh set ?', rh, callback)
    }

    this.DeleteRH = function(rh,connection, callback){
        connection.query('delete from rh where idrh = ? ' ,rh, callback),
        console.log("Deletado com sucesso")
    }

    this.DeleteRH2 = function(connection, callback){
        connection.query('delete from rh where idrh =  '+require.body.id , callback),
        console.log("Deletado com sucesso")
    }

    this.getRh = function (connection, callback){
        connection.query('select * from rh ', callback )
    };

    this.SendMedico = function(rh,connection, callback){
        connection.query('insert into medico set ?', rh, callback)
    }

    this.getMedico = function (connection, callback){
        connection.query('select * from medico ', callback )
    };


    return this;
}