/**
 * Created by Sakura on 2017/6/17.
 */
var express = require('express');
var User = require("../model/user.js");
var Userinterest = require("../model/userinterest.js");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    console.log("UserInterest Get");
    if(req.session.user.username != "")
    {
        var userinterest = new Userinterest({
            username : req.session.user.username,
            isset :  req.session.user.userinterest.isset,
            finance : req.session.user.userinterest.finance,
            sports : req.session.user.userinterest.sports,
            ent : req.session.user.userinterest.ent,
            mil : req.session.user.userinterest.mil,
            edu : req.session.user.userinterest.edu,
            tech : req.session.user.userinterest.tech,
            nba : req.session.user.userinterest.nba,
            stock : req.session.user.userinterest.stock,
            health : req.session.user.userinterest.health,
            ast : req.session.user.userinterest.ast,
            lady : req.session.user.userinterest.lady
        });

        // var userinterest = req.session.user.userinterest;
        console.log("Get1");
        userinterest.userinterestSet(function(err,result){
            if(err)
            {
                console.log("Get2");
                console.log(err);
            }
            else
            {
                console.log("退出时成功存储");
            }
        })
        res.send({msg: "success"})
    }
    else
    {
        console.log("无用户登录");
        res.send({msg: "no user login"})
    }
    res.end();
    //res.render('main', { username:user.username});
});

router.post("/",function(req, res) {
    //获取form表单提交的登录数据
    var username = req.session.user.username;
    var isset = 1;

    var finance = 0;
    if(req.body.finance)
        finance =  parseInt(req.body.finance);

    var sports = 0;
    if(req.body.sports)
        sports =  parseInt(req.body.sports);

    var ent = 0;
    if(req.body.ent)
        ent = parseInt(req.body.ent);

    var mil = 0;
    if(req.body.mil)
        mil = parseInt(req.body.mil);

    var edu = 0;
    if(req.body.edu)
        edu = parseInt(req.body.edu);

    var tech = 0;
    if(req.body.tech)
        tech = parseInt(req.body.tech);

    var nba = 0;
    if(req.body.nba)
        nba = parseInt(req.body.nba);

    var stock = 0;
    if(req.body.stock)
        stock = parseInt(req.body.stock);

    var health = 0;
    if(req.body.health)
        health = parseInt(req.body.health);

    var ast = 0;
    if(req.body.ast)
        ast = parseInt(req.body.ast);

    var lady = 0;
    if(req.body.lady)
        lady = parseInt(req.body.lady);

    var userinterest = new Userinterest({
        username : username,
        isset :  isset,
        finance : finance,
        sports : sports,
        ent : ent,
        mil : mil,
        edu : edu,
        tech : tech,
        nba : nba,
        stock : stock,
        health : health,
        ast : ast,
        lady : lady
    });

    userinterest.userinterestSet(function(err,result){
        if(err)
        {
            console.log(err);
            res.send({code:0, msg:err});
            return;
        }
        else
        {
            req.session.user.userinterest = userinterest;
            res.send({code:200, msg:'提交成功'});
        }
    })

});


module.exports = router;