// TODO 保证页面加载完毕后执行代码
$(function(){
    /*
        TODO 需要完成多少功能
        TODO 1. 手机京东、客户服务、网站导航、我的京东、去购物车结算和左栏菜单等悬停效果
        TODO 2. 搜索框的提示功能
        TODO 3. 详情页商品小图标与大图标动态效果
        TODO 4. 详情页商品大图标的放大镜效果
        TODO 5. 分享按钮的显示和隐藏
        TODO 6. 商品介绍等页签的切换效果
     */
    //
    // $('#app_jd>label').mousemove(function () {
    //     $('#app_jd_items').show();
    // }).mouseout(function () {
    //     $('#app_jd_items').hide();
    // });

    jd_tool.moveShow('#app_jd>label','#app_jd_items');
    jd_tool.moveShow('#service>label','#service_items');
    jd_tool.moveShow('#site_nav>label','#site_nav_items');
    jd_tool.moveShow('#my_jd>div:first','#my_jd_items');
    jd_tool.moveShow('#settle_up>div:first','#no_goods');

    // // 装换成方法
    // function moveShow(paresNode,childNode) {
    //     $(paresNode).mousemove(function () {
    //         $(childNode).show();
    //     }).mouseout(function () {
    //         $(childNode).hide();
    //     });
    // }

});