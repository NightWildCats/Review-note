/**
 * Created by Administrator on 2017/3/11/011.
 */
$(function () {
    //定义个对象用于 存储方法 并通过 window把对象方法 暴露出去
    var jd_tool = {
        moveShow : function(paresNode,childNode) {
            $(paresNode).mousemove(function () {
                $(childNode).show();
            }).mouseout(function () {
                $(childNode).hide();
            });
        }
    };
    window.jd_tool = jd_tool;
});