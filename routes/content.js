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
        console.log(user.userinterest.isset);
        console.log(user.userinterest.finance);
        console.log(user.userinterest.ent);
    }
    var newsContent = new News({newsid: req.query.newsid});
    newsContent.getNewsById(function(err,result){
        console.log(result[0].title);
        console.log(result[0].newsid);
        var type1 = "财经", type2 = "体育", type3 = "娱乐", type4 = "教育";
        if(req.session.user && req.session.user.username!="")
        {
            switch(result[0].channel)
            {
                case '财经': req.session.user.userinterest.finance += 1; break;
                case '体育': req.session.user.userinterest.sports +=1; break;
                case '娱乐': req.session.user.userinterest.ent +=1; break;
                case '军事': req.session.user.userinterest.mil +=1; break;
                case '教育': req.session.user.userinterest.edu +=1; break;
                case '科技': req.session.user.userinterest.tech +=1; break;
                case 'NBA': req.session.user.userinterest.nba +=1; break;
                case '股票': req.session.user.userinterest.stock +=1; break;
                case '健康': req.session.user.userinterest.health +=1; break;
                case '星座': req.session.user.userinterest.ast +=1; break;
                case '女性': req.session.user.userinterest.lady +=1; break;
            }

            function down(x, y) {
                return (x.num < y.num) ? 1 : -1;
            }

            var useri = req.session.user.userinterest;
            var a = [{name: "财经", num: useri.finance}, {name: "体育", num: useri.sports}, {name: "娱乐", num: useri.ent}, {name: "军事", num: useri.mil},
                {name: "教育", num: useri.edu},{name: "科技", num: useri.tech},{name: "NBA", num: useri.nba},{name: "股票", num: useri.stock},
                {name: "健康", num: useri.health},{name: "星座", num: useri.ast},{name: "女性", num: useri.lady}];
            a.sort(down);
            type1 = a[0].name;
            type2 = a[1].name;
            type3 = a[2].name;
            type4 = a[3].name;
        }

        var newslist = new News({channel:'新闻'});
        newslist.newsInfo(function(err, result2){
            var d1_list = new News({channel:type1});
            d1_list.newsInfo(function(err, result3){
                var d2_list = new News({channel:type2});
                d2_list.newsInfo(function(err, result4){
                    var d3_list = new News({channel:type3});
                    d3_list.newsInfo(function(err, result5){
                        var d4_list = new News({channel:type4});
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
