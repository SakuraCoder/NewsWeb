/**
 * Created by Sakura on 2017/6/16.
 */
var express = require('express');
var News = require('../model/news.js');
var router = express.Router();

router.get('/', function(req, res, next) {
    var newsContent = new News({title: req.query.title});
    newsContent.getNewsByTitle(function(err,result){
        var newslist = new News({channel:'新闻'});
        newslist.newsInfo(function(err, result2){
            res.render('content', {data: result, adata: result2});
        });
    });
});

module.exports = router;
