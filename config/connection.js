var mysql = require("mysql");
var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"burgers_db"
})

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'ixqxr3ajmyapuwmi.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'ppixa67re8qtpiwi',
        password: 'xic6ao1qtdwr3h8g',
        database: 'fkky5iorkkt81cvn'
    });
};

connection.connect(function(err) {
    if(err)throw err;
    console.log("Connected as id: " + connection.threadid);
});

module.exports = connection;