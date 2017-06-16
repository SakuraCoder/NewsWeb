var express = require('express');
var News = require('../model/news.js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var newslist = new News({channel:'头条'});
  newslist.newsInfo(function(err,result){
      console.log(result.length);
      console.log(result[0].title);
      var toplist = new News({channel:'新闻'});
      toplist.newsInfo(function(err, result2){
          console.log(result2.length);
          console.log(result2[0].title);
          res.render('index', {data: result, adata: result2});
      });
  });



});

module.exports = router;
