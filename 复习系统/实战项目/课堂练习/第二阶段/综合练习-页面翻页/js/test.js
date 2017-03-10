/**
 * Created by Administrator on 2017/3/1/001.
 */
    window.onload = function () {


        //设置每一个显示主题信息的图片的高度与浏览器的高度是一致的
        //图片高度 = 视口高度
        // wrapper
        var wrapperDom = document.querySelectorAll("#wrapper>div");
        var len = wrapperDom.length;
        for (var i = 0; i < len; i++) {
            wrapperDom[i].style.height = document.documentElement.clientHeight+"px";
        }
        //当浏览器视口改变的时候也动态跟着变化，需要用到 windos.onresize 事件来监听
        window.onresize = function () {
            for (var i = 0; i < len; i++) {
                wrapperDom[i].style.height = document.documentElement.clientHeight+"px";
            }
        };

        /**********************************************************************************/

        //实现点击之后导航链接出现 “边框的标示”
        //遍历ul下的所有li 当ev.target 指向制定的目标时候添加 .boder样式
        var contterUlDom = document.querySelectorAll("#contterUl>li");
        var contterDom = document.querySelectorAll("#contterUl");
        for (var i = 0; i <= contterUlDom.length; i++) {
            this.onclick = function (ev) {
                if ( this.id =="li1") {
                    contterUlDom[1].classList.remove("boder");
                    contterUlDom[2].classList.remove("boder");
                    ev.target.parentNode.classList.add("boder");
                }
                if (this.id =="li2") {
                    contterUlDom[0].classList.remove("boder");
                    contterUlDom[2].classList.remove("boder");
                    ev.target.parentNode.classList.add("boder");
                }
                if (this.id =="li2") {
                    contterUlDom[0].classList.remove("boder");
                    contterUlDom[1].classList.remove("boder");
                    ev.target.parentNode.classList.add("boder");
                }


            }

        }




    };