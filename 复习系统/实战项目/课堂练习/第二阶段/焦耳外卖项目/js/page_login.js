/**
 * Created by Administrator on 2017/2/20.
 */

window.onload = function () {

    var btnSubmitDom = document.querySelector("#btnSubmit");
    // 账号Dom
    var userNoDom = document.querySelector("#userNo");
    //表单
    var form1Dom = document.querySelector("#form1");
    // 错误信息
    var errMsgDom = document.querySelector("#errMsg");
    //获取验证码对象
    var pswDom = document.querySelector("#psw");

    //提交事件
    btnSubmitDom.onclick = function () {
        //手机号码为空
        if (userNoDom.value == "") {
            errMsgDom.style.visibility = "visible";
            errMsgDom.innerText = "手机号码不能为空";
            return;
        }else {
            //定义正则
            var res = resRex(userNoDom);
            //判断电话号码是否合法
            if (res) {
                //验证码为空
                if (pswDom.value == "") {
                    errMsgDom.style.visibility = "visible";
                    errMsgDom.innerText = "您输入的验证码不合法";
                    return;
                } else {
                    //表单提交
                    form1Dom.submit();
                }
            } else {
                return;
            }
        }
    };

    userNoDom.onchange = function () {
        //初始化错误信息
        errMsgDom.innerText = "您输入的手机号码不合法";
        // 1.检查账号的合法性，必须是一个手机号码
        var res = resRex(userNoDom);
        if(res){
            //验证通过，隐藏错误信息。
            errMsgDom.style.visibility = "hidden";
        }else{
            //验证失败，提示错误信息。
            errMsgDom.style.visibility = "visible";
        }
    };

    // 获取鼠标焦点事件
    userNoDom.onfocus = function () {
        //验证通过，隐藏错误信息。
        errMsgDom.style.visibility = "hidden";
    };
    /**
     * 调用正则验证
     * @param obj 验证的对象
     * @returns {boolean} 返回的正则值 true / false
     */
    function  resRex(obj) {
        var val = obj.value;
        var exp = /^1[3-9][0-9]{9}$/;
        var res = exp.test(val);
        return res;
    }


};
