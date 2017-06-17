/**
 * Created by Sakura on 2017/6/17.
 */
var mysql = require('mysql');
var pool = mysql.createPool({
 host : '127.0.0.1',
 user : 'root',
 password :'ss190802',
 database:'newsdb',
 port : 3306
 });

//可以监听connection事件，并设置session值
pool.on('connnection',function(connection){
    console.log("pool on");
    connection.query('SET SESSION auto_increment_increment=1')
});

function User(user){
    this.username = user.username;
    this.password = user.password;
    this.phone = user.phone;
    this.email = user.email;
}

User.prototype.userSave = function save(callback){
    var user = {
        username : this.username,
        password : this.password,
        phone : this.phone,
        email : this.email
    };
    var INSERT_USER= "INSERT INTO user (USERNAME,password,phone,email) VALUES (?,?,?,?)";
    pool.getConnection(function(err,connection){
        connection.query(INSERT_USER,[user.username,user.password,user.phone,user.email],function(err,result){
            if(err){
                console.log("INSERT_USER Error: " + err.message);
                return;
            }
            connection.release();
            callback(err,result);
        });
    });
};

User.prototype.userInfo = function(callback){
    var user = {
        username : this.username,
        password : this.password,
        phone : this.phone,
        email : this.email
    };

    var SELECT_LOGIN ="SELECT * FROM user WHERE USERNAME = ?";
    pool.getConnection(function(err,connection){
        connection.query(SELECT_LOGIN,[user.username],function(err,result){
            if (err) {
                console.log("SELECT_LOGIN Error: " + err.message);
                return;
            }
            connection.release();
            callback(err,result);
        });
    });
}

User.prototype.getUserByEmail = function(callback){
    var user = {
        username : this.username,
        password : this.password,
        phone : this.phone,
        email : this.email
    };

    var SELECT_LOGIN ="SELECT * FROM user WHERE email = ?";
    pool.getConnection(function(err,connection){
        connection.query(SELECT_LOGIN,[user.email],function(err,result){
            if (err) {
                console.log("SELECT_LOGIN Error: " + err.message);
                return;
            }
            connection.release();
            callback(err,result);
        });
    });
}


module.exports = User;
