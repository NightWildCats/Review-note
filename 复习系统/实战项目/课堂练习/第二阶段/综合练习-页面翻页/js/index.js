
window.onload = function () {

    // 获取所有的子页面DOM，设置其高度 = 视口高度
    var pagesDom = document.querySelectorAll("#pages>div");
    var pageItem = pagesDom.length;
    for (var i = 0; i < pageItem; i++) {
        var pageDom = pagesDom[i];
        pageDom.style.height = document.documentElement.clientHeight + "px";
    }
    // 记录当前显示第几页
    var currentPageIndex = 0;
    // 获取所有导航链接的DOM
    var menuItemDom = document.querySelectorAll("#menu a");
    // 默认激活第一个菜单
    menuItemDom[currentPageIndex].classList.add("a-active");


    // 监控滚轮事件，实现翻页效果
    // var date = new Date();
    // var lastWheelTime = date.getTime();

    var lastWheelTime = Date.now();
    window.onmousewheel = function (ev) {
        // 获取滚轮事件开始的时间
        var currentWheelTime = Date.now();
        // 1. 筛选出有效的滚轮事件
        if((currentWheelTime - lastWheelTime) > 200){
            // 通过正负值，判断滚轮的滑动方向，做翻页处理
            if(ev.wheelDelta < 0 && currentPageIndex < pageItem - 1 ){
                // 菜单之前的样式清除
                menuItemDom[currentPageIndex].classList.remove("a-active");
                ++currentPageIndex;
                menuItemDom[currentPageIndex].click();
                menuItemDom[currentPageIndex].classList.add("a-active");
            }
            if(ev.wheelDelta > 0 && currentPageIndex > 0 ){
                // 菜单之前的样式清除
                menuItemDom[currentPageIndex].classList.remove("a-active");
                --currentPageIndex;
                menuItemDom[currentPageIndex].click();
                menuItemDom[currentPageIndex].classList.add("a-active");
            }
            page1Aminmation();
            page2Aminmation();
            page3Aminmation();
        }
        // 记录鼠标滚轮事件结束的时间
        lastWheelTime = Date.now();
    };
    // 处理菜单相关逻辑
    var menuDom = document.querySelector("#menu");


    // 单击事件代理
    menuDom.onclick = function (ev) {
        var itemDom = ev.target;
        if(itemDom.href == undefined){
            console.log("非菜单元素");
            return;
        }
        // 之前的样式清除
        menuItemDom[currentPageIndex].classList.remove("a-active");
        // 获取菜单的索引
        var itemIndex = parseInt(itemDom.id.substring(itemDom.id.length - 1));
        currentPageIndex = itemIndex;
        menuItemDom[currentPageIndex].classList.add("a-active");
        page1Aminmation();
        page2Aminmation();
        page3Aminmation();
    };
    page1Aminmation();
    page2Aminmation();
    page3Aminmation();


    // 处理第一个页面的动画效果
    function page1Aminmation() {
        var page1ImgDom = document.querySelector("#page1Img");
        var page1TitleDom = document.querySelector("#page1Title");
        if(currentPageIndex == 0){
            page1ImgDom.classList.add("page1Amin");
            page1TitleDom.classList.add("page1Amin");
        }else {
            page1ImgDom.classList.remove("page1Amin");
            page1TitleDom.classList.remove("page1Amin");
        }
    }
    // 处理第二个页面的动画效果
    function page2Aminmation() {
        // 奇数位的.box
        var boxDomList = document.querySelectorAll(".wrapper .box");
        var boxNum = boxDomList.length;

        if(currentPageIndex == 1){
            for (var i = 0; i < boxNum; i++) {
                boxDomList[i].classList.add("page2Amin");
            }
        }else{
            for (var i = 0; i < boxNum; i++) {
                boxDomList[i].classList.remove("page2Amin");
            }
        }
    }
    //处理第三个页面的动画效果
    function page3Aminmation() {
        var page3ImGDom = document.querySelector("#page3ImG");
        var page3DesDom = document.querySelector("#page3Des");
        if(currentPageIndex == 2) {
            page3ImGDom.classList.add("page2-show-ative");
            page3DesDom.classList.add("pre-active");
        }else {
            page3ImGDom.classList.remove("page2-show-ative");
            page3DesDom.classList.remove("pre-active");
        }
    }

    //视口大小时，修改每个子页面的高度
    window.onresize = function (ev) {
        // console.log("视口在调整大小。", document.documentElement.clientHeight)
        var pageItem = pagesDom.length;
        for (var i = 0; i < pageItem; i++) {
            var pageDom = pagesDom[i];
            pageDom.style.height = document.documentElement.clientHeight + "px";
        }
    }
};