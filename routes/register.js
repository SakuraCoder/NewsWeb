/**
 * Created by Sakura on 2017/6/17.
 */
var express = require('express');
var router = express.Router();
var Userinterest = require("../model/userinterest.js");
var User = require("../model/user.js");

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {errMsg:""});
});

router.post('/',function(req, res) {
    var username		 = req.body.username;
    var password		 = req.body.password;
    var phone			 = req.body.phone;
    var email			 = req.body.email;

    var newUser = new User({
        username		 : username,
        password		 : password,
        phone			 : phone,
        email			 : email
    });

    //检查用户名是否已经存在
    newUser.userInfo(function(err, results){
       if(results != null && results.length > 0)
       {
           user = {'username':''};
           console.log("注册失败");
           res.send({code:0, msg: ' * 用户名已存在', userinfo : user});
       }
       else
       {
           newUser.getUserByEmail(function(err, results2){
               if(results2 != null && results2.length > 0)
               {
                   user = {'username':''};
                   console.log("注册失败");
                   res.send({code:0, msg: ' * 该邮箱已被注册', userinfo : user});
               }
               else
               {
                   newUser.userSave(function(err,result){
                       if(err){
                           user = {'username':''};
                           console.log("注册失败");
                           res.send({code:0, msg: err, userinfo : user});
                           return;
                       }
                       else{
                           var useri = new Userinterest({
                               username : username
                           })
                           useri.userinterestSave(function(err,result3){
                               if(err){
                                   console.log("建表失败");
                               }
                           })
                           res.locals.status = "success";
                           var user = {'username':username};
                           console.log("注册成功");
                           res.send({code:200, msg:'注册成功', userinfo : user});
                       }
                   });
               }
           })
       }
    });

});

module.exports = router;
