var express = require('express');
var News = require('../model/news.js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var newslist = new News({channel:'头条'});
  newslist.newsInfo(function(err,result){
      console.log(result.length);
      console.log(result[0].title);
      res.render('index', {data: result});

  });
});

module.exports = router;
