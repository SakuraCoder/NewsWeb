/**
 * Created by Sakura on 2017/6/17.
 */
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

function Userinterest(user){
    this.username = user.username;
    this.isset = user.isset;
    this.finance = user.finance;
    this.sports = user.sports;
    this.ent = user.ent;
    this.mil = user.mil;
    this.edu = user.edu;
    this.tech = user.tech;
    this.nba = user.nba;
    this.stock = user.stock;
    this.health = user.health;
    this.ast = user.ast;
    this.lady = user.lady;
}

Userinterest.prototype.userinterestSave = function(callback){
    var userinterest = {
        username : this.username,
        isset :  this.isset,
        finance : this.finance,
        sports : this.sports,
        ent : this.ent,
        mil : this.mil,
        edu : this.edu,
        tech : this.tech,
        nba : this.nba,
        stock : this.stock,
        health : this.health,
        ast : this.ast,
        lady : this.lady
    };
    var INSERT_USER= "INSERT INTO userinterest (USERNAME,isset,finance,sports, ent, mil, edu, tech, nba, stock, health, ast, lady) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)";
    pool.getConnection(function(err,connection){
        connection.query(INSERT_USER,[userinterest.username,0,0,0,0,0,0,0,0,0,0,0,0 ],function(err,result){
            if(err){
                console.log("INSERT_USER Error: " + err.message);
                return;
            }
            connection.release();
            callback(err,result);
        });
    });
};

Userinterest.prototype.userinterestSet = function(callback){
    var userinterest = {
        username : this.username,
        isset :  this.isset,
        finance : this.finance,
        sports : this.sports,
        ent : this.ent,
        mil : this.mil,
        edu : this.edu,
        tech : this.tech,
        nba : this.nba,
        stock : this.stock,
        health : this.health,
        ast : this.ast,
        lady : this.lady
    };
    console.log("update interest set");
    var INSERT_USER= "UPDATE userinterest set isset = ?, finance = ?, sports = ?, ent = ?, mil = ?, edu = ?, tech = ?, nba = ?, stock = ?, health = ?, ast = ?, lady = ? where username = ?";
    pool.getConnection(function(err,connection){
        connection.query(INSERT_USER,[1,userinterest.finance,userinterest.sports,userinterest.ent,userinterest.mil,userinterest.edu,userinterest.tech,userinterest.nba,userinterest.stock,userinterest.health,userinterest.ast,userinterest.lady, userinterest.username ],function(err,result){
            if(err){
                console.log("INSERT_USER Error: " + err.message);
                return;
            }
            connection.release();
            callback(err,result);
        });
    });
};

Userinterest.prototype.userinterestInfo = function(callback){
    var userinterest = {
        username : this.username,
        isset :  this.isset,
        finance : this.finance,
        sports : this.sports,
        ent : this.ent,
        mil : this.mil,
        edu : this.edu,
        tech : this.tech,
        nba : this.nba,
        stock : this.stock,
        health : this.health,
        ast : this.ast,
        lady : this.lady
    };
    var SELECT_USER= "SELECT * from userinterest where username = ? " ;
    pool.getConnection(function(err,connection){
        connection.query(SELECT_USER,[userinterest.username],function(err,result){
            if(err){
                console.log("INSERT_USER Error: " + err.message);
                return;
            }
            connection.release();
            callback(err,result);
        });
    });
};

Userinterest.prototype.updateInfo = function(callback){
    var userinterest = {
        username : this.username,
        isset :  this.isset,
        finance : this.finance,
        sports : this.sports,
        ent : this.ent,
        mil : this.mil,
        edu : this.edu,
        tech : this.tech,
        nba : this.nba,
        stock : this.stock,
        health : this.health,
        ast : this.ast,
        lady : this.lady
    };

    var INSERT_USER= "UPDATE userinterest where username = ? " +
        "set isset = ?, finance = finance + 1, sports = sports + 1, ent = ent + 1, mil = mil + 1, edu = edu + 1, tech = tech + 1, nba = nba + 1, stock = stock + 1, health = health + 1, ast = ast + 1, lady = lady + 1";
    pool.getConnection(function(err,connection){
        connection.query(INSERT_USER,[userinterest.username,1],function(err,result){
            if(err){
                console.log("INSERT_USER Error: " + err.message);
                return;
            }
            connection.release();
            callback(err,result);
        });
    });
}



module.exports = Userinterest;
