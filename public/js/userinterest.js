/**
 * Created by Sakura on 2017/6/17.
 */

$().ready(function () {

    $("#user_form").validate({
        submitHandler : function (form) {
            $(form).ajaxSubmit({
                dataType:"json",
                success:function( jsondata ){
                    if( jsondata.code == 200 ){
                        window.location.href = "/";
                        $('#user-modal').modal('hide');
                        alert("提交成功");
                    }else{
                        // $('#login-modal').modal('show');
                        // $('#password1').text("");
                        // $('#password2').text("");
                        // $('#register_error').text(" * "+ jsondata.msg);
                        alert(jsondata.msg);
                    }
                }
            });
        },
        rules: {

        },
        messages: {

        }

    });

});