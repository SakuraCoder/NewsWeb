var express = require('express');
var router = express.Router();
var Userinterest = require("../model/userinterest.js");

router.get('/', function(req, res) {
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

    userinterest.userinterestSet(function(err,result){
        if(err)
        {
            console.log("Get2");
            console.log(err);
        }
        else
        {
            console.log("登出时成功存储");
        }
    });

	req.session.user.username = "";
	res.redirect('/');
});

module.exports = router;