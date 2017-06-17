/**
 * Created by Sakura on 2017/6/17.
 */
/**
 * Created by pankaicheng on 17/5/19.
 */

jQuery.validator.addMethod(
    "type0",
    function (value, element, param) {
        var type_val= $("input[name='optionsRadios']:checked").val()
        if (type_val === 1)
            return true;
        else {
            if (value.length === 0) {
                return false
            }
            else {
                return true;
            }
        }
    },
    $.validator.format("请输入正确的信息")
);
var user_valid = function () {
    $.get("/login",
        function (result) {
            //alert("int the user_valid");
            user_info = result.userinfo;
            //alert(user_info.username);
            if(user_info.username!=""){
                $("#login-button").hide();
                $("#register-button").hide();
                $("#user-menu").show();
                $("#usermenu").text(result.userinfo.username);
                $("#user-menu-name").text(user_info.username);
                $("#dropdown-user-name").text(result.userinfo.username);
            }
            else{
                $("#user-menu").hide();
                $("#login-button").show();
                $("#register-button").show();
            }
        });
};

$().ready(function () {
    user_valid();
    //alert("open the window");
    $("#register_form").validate({
        submitHandler : function(form) {  //验证通过后的执行方法
            //当前的form通过ajax方式提交（用到jQuery.Form文件）
            //alert("提交表单");
            $(form).ajaxSubmit({
                dataType:"json",
                success:function( jsondata ){
                    if( jsondata.code == 200 ){
                       $('#register-modal').modal('hide');
                       // $('#login_bond_id').html(jsondata.userinfo.username);
                        //user_valid();
                        alert("注册成功");
                    }else{
                       // $('#login-modal').modal('show');
                        $('#password1').text("");
                        $('#password2').text("");
                        $('#register_error').text(" * "+ jsondata.msg);
                        alert(jsondata.msg);
                    }
                }
            });

        },
        rules: {
            username: {
                required: true,
                minlength: 6,
                maxlength: 20
            },
            password: {
                required: true,
                minlength: 6,
                maxlength: 20
            },
            repassword: {
                equalTo: "#password1"
            },
            email: {
                required: true,
                email: true
            },
            phone:{
                required : true,
                number: true,
                minlength: 11,
                maxlength: 11
            }
        },
        messages: {
            username: {
                required: "*请输入用户名",
                minlength: jQuery.validator.format("*用户名不能小于{0}个字符"),
                maxlength: jQuery.validator.format("*用户名不能大于{0}个字符"),
                notnumber: "*用户名不能是纯数字"
            },
            password: {
                required: "*请输入密码",
                minlength: jQuery.validator.format("*密码不能小于{0}个字符"),
                maxlength: jQuery.validator.format("*密码不能大于{0}个字符")
            },
            repassword: {
                equalTo: "*两次密码不一样"
            },
            email: {
                required: "*请输入邮箱",
                email: "*请输入有效邮箱"
            },
            phone:{
                required: "*请输入手机号",
                number: '*手机号只能是纯数字',
                minlength: jQuery.validator.format("*请输入正确的手机号"),
                maxlength: jQuery.validator.format("*请输入正确的手机号")
            }
        }

    });

});


$("#close-modal").click(function () {
    $("#login_error").html("");
    $("#login_password").text("");
    $("#bond_id").text("");
    $("#password1").text("");
    $("#password2").text("");
    $("#register_error").html("");
});

