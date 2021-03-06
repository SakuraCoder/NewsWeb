/**
 * Created by Sakura on 2017/6/13.
 */
var mysql = require('mysql');

var pool = mysql.createPool({
    host : 'localhost',
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

function News(news){
    this.channel = news.channel;
    this.title = news.title;
    this.time = news.time;
    this.src = news.src;
    this.category = news.category;
    this.pic = news.pic;
    this.content = news.content;
    this.url = news.url;
    this.weburl = news.weburl;
    this.newsid = news.newsid;
}
News.prototype.getNewsById = function(callback){
    var news = {
        channel : this.channel,
        title : this.title,
        time : this.time,
        src : this.src,
        category : this.category,
        pic : this.pic,
        content : this.content,
        url : this.url,
        weburl : this.weburl,
        newsid: this.newsid
    };

    var SELECT_NEWS ="SELECT * FROM newstable WHERE newsid = ?";
    pool.getConnection(function(err,connection){
        connection.query(SELECT_NEWS,[news.newsid],function(err,result){
            if (err) {
                console.log("SELECT_NEWS Error: " + err.message);
                return;
            }
            connection.release();
            callback(err,result);
        });
    });
}

News.prototype.newsInfo = function(callback){
    var news = {
        channel : this.channel,
        title : this.title,
        time : this.time,
        src : this.src,
        category : this.category,
        pic : this.pic,
        content : this.content,
        url : this.url,
        weburl : this.weburl
    };

    var SELECT_NEWS ="SELECT * FROM newstable WHERE channel = ? ORDER BY TIME DESC";
    pool.getConnection(function(err,connection){
        connection.query(SELECT_NEWS,[news.channel],function(err,result){
            if (err) {
                console.log("SELECT_NEWS Error: " + err.message);
                return;
            }
            connection.release();
            callback(err,result);
        });
    });
}
module.exports = News;