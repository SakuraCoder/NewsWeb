/**
 * Created by Sakura on 2017/6/16.
 */
var express = require('express');
var News = require('../model/news.js');
var router = express.Router();

router.get('/', function(req, res, next) {
    var user = req.session.user;
    console.log("姓名");
    if(user!=null && user.username != "")
    {
        console.log(user.username);
    }
    var newsContent = new News({newsid: req.query.newsid});
    newsContent.getNewsById(function(err,result){
        console.log(result[0].title);
        console.log(result[0].newsid);
        var newslist = new News({channel:'新闻'});
        newslist.newsInfo(function(err, result2){
            var d1_list = new News({channel:'财经'});
            d1_list.newsInfo(function(err, result3){
                var d2_list = new News({channel:'体育'});
                d2_list.newsInfo(function(err, result4){
                    var d3_list = new News({channel:'娱乐'});
                    d3_list.newsInfo(function(err, result5){
                        var d4_list = new News({channel:'军事'});
                        d4_list.newsInfo(function(err, result6){
                            res.render('content', {data: result, adata: result2, d1:result3, d2:result4, d3:result5, d4:result6});
                        });
                    });

                });

            });
        });
    });
});

module.exports = router;
