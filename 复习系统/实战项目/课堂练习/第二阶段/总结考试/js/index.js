/**
 * Created by Administrator on 2017/3/3/003.
 */

window.onload = function () {
    //获取对象
    function Obj(objName) {
        var  obj = document.querySelector(objName);
        return obj;
    }
    var  pageImgDom = Obj(".page-img");
    var  shopImgDom = Obj(".shop-img");
    var  gruopShopImgDom = Obj(".gruop-shop-img");
    var  signImgDom = Obj(".sign-img");
    //实现清除样式
    function removeClass(obj,className)  {
        obj.classList.remove(className);
    }
    //清除样式
    function romove() {
        removeClass(pageImgDom,"page-img1");
        removeClass(shopImgDom,"shop-img1");
        removeClass(gruopShopImgDom,"gruop-shop-img1");
        removeClass(signImgDom,"sign-img1");
    }
    //添加样式
     function clickClass(obj,className ) {
         obj.onclick = function () {
             romove();
             obj.classList.add(className);
         };
     }
     //执行添加样式
    clickClass(pageImgDom,"page-img1" );
    clickClass(shopImgDom,"shop-img1" );
    clickClass(gruopShopImgDom,"gruop-shop-img1" );
    clickClass(signImgDom,"sign-img1" );
};

