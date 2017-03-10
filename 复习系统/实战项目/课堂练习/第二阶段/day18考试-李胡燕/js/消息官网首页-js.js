/**
 * Created by Administrator on 2017/3/3.
 */
window.onload = function () {
    var navItemDom=document.querySelector(".ispr-active");
    var nav2ItemDom=document.querySelector(".ispr2-active");
    var nav3ItemDom=document.querySelector(".ispr3-active");
    var nav4ItemDom=document.querySelector(".ispr4-active");
    //删除
    function removeClass(obj,value){
        obj.classList.remove(value);
    }
    function remove() {
        removeClass(navItemDom,"animation1");
        removeClass(nav2ItemDom,"animation2");
        removeClass(nav3ItemDom,"animation3");
        removeClass(nav4ItemDom,"animation4");
    }
    remove();
    navItemDom.onclick = function () {
        remove();
        navItemDom.classList.add("animation1");
    };
    nav2ItemDom.onclick = function () {
        remove();
        nav2ItemDom.classList.add("animation2");
    };
    nav3ItemDom.onclick = function () {
        remove();
        nav3ItemDom.classList.add("animation3");
    };
    nav4ItemDom.onclick = function () {
        remove();
        nav4ItemDom.classList.add("animation4");
    };
};





