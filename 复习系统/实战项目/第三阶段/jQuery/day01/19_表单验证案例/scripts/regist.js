/**
 * Created by King on 2015/11/26.
 */
$(function(){
    $("#username").focus(function(){
        var $username_msg = $("#username_msg");
        if(!$username_msg.hasClass("hide")){
            $username_msg.text("");
        }
        $username_msg.text("4-20位字符，支持英文、数字及'-'、'_'组合");
        $username_msg.attr("class","focus");
    }).blur(usernameValidator);
    $("#password").focus(function(){
        var $pwd_msg = $("#pwd_msg");
        if(!$pwd_msg.hasClass("hide")){
            $pwd_msg.text("");
        }
        $pwd_msg.text("6-20位字符，可使用字母、数字的组合");
        $pwd_msg.attr("class","focus");
    }).blur(pwdValidator);
    $("#pwdRepeat").focus(function(){
        var $pwdRepeat_msg = $("#pwdRepeat_msg");
        if(!$pwdRepeat_msg.hasClass("hide")){
            $pwdRepeat_msg.text("");
        }
        $pwdRepeat_msg.text("6-20位字符，可使用字母、数字的组合");
        $pwdRepeat_msg.attr("class","focus");
    }).blur(pwdRepeatValidator);
    $("#mail").focus(function(){
        var $mail_msg = $("#mail_msg");
        if(!$mail_msg.hasClass("hide")){
            $mail_msg.text("");
        }
        $mail_msg.text("完成验证后，可以使用该邮箱登录和找回密码");
        $mail_msg.attr("class","focus");
    }).blur(emailValidator);
});
function usernameValidator(){
    var $username_msg = $("#username_msg");
    if(!$username_msg.hasClass("hide")){
        $username_msg.text("");
        $username_msg.attr("class","hide");
    }
    var flag = true;
    var value = $("#username").val();
    if(value.length<4||value.length>20){
        $username_msg.text("用户名长度只能在4-20位字符之间");
        $username_msg.attr("class","error");
        flag = false;
    }else if(!/^[a-zA-Z0-9_-]{4,20}$/.test(value)){
        $username_msg.text("用户名只能由英文和数字及'-'、'_'组成");
        $username_msg.attr("class","error");
        flag = false;
    }
    return flag;
}
function pwdValidator(){
    var $pwd_msg = $("#pwd_msg");
    if(!$pwd_msg.hasClass("hide")){
        $pwd_msg.text("");
        $pwd_msg.attr("class","hide");
    }
    var flag = true;
    var value = $("#password").val();
    if(value.length<4||value.length>20){
        $pwd_msg.text("密码长度只能在6-20位字符之间");
        $pwd_msg.attr("class","error");
        flag = false;
    }else if(!/^[a-zA-Z0-9_-]{4,20}$/.test(value)){
        $pwd_msg.text("密码只能由字母和数字组成");
        $pwd_msg.attr("class","error");
        flag = false;
    }
    return flag;
}
function pwdRepeatValidator(){
    var $pwdRepeat_msg = $("#pwdRepeat_msg");
    if(!$pwdRepeat_msg.hasClass("hide")){
        $pwdRepeat_msg.text("");
        $pwdRepeat_msg.attr("class","hide");
    }
    var flag = true;
    var value = $("#password").val();
    var pwd = $("#password").val();
    if(value.length<4||value.length>20){
        $pwdRepeat_msg.text("密码长度只能在6-20位字符之间");
        $pwdRepeat_msg.attr("class","error");
        flag = false;
    }else if(!/^[a-zA-Z0-9_-]{4,20}$/.test(value)){
        $pwdRepeat_msg.text("密码只能由字母和数字组成");
        $pwdRepeat_msg.attr("class","error");
        flag = false;
    }else if(value != pwd){
        $pwdRepeat_msg.text("两次密码输入不一致");
        $pwdRepeat_msg.attr("class","error");
        flag = false;
    }
    return flag;
}
function emailValidator(){
    var $mail_msg = $("#mail_msg");
    if(!$mail_msg.hasClass("hide")){
        $mail_msg.text("");
        $mail_msg.attr("class","hide");
    }
    var flag = true;
    var value = $("#mail").val();
    if(!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value)){
        $mail_msg.text("邮箱地址不正确，请重新输入");
        $mail_msg.attr("class","error");
        flag = false;
    }
    return flag;
}

function validateForm(){
    if(!usernameValidator()||!pwdValidate()||!pwdRepeatValidate()||!mailValidate()){
        return false;
    }else{
        return true;
    }
}