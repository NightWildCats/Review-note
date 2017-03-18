/**
 * Created by King on 2017/3/11.
 */
$(function(){
    // TODO 定义工具对象 - 专门用于封装当前案例的所有工具函数
    var jd_tool = {
        controlShow : function(parentElem, childElem){
            $(parentElem).mouseover(function(){
                $(childElem).show();
            }).mouseout(function(){
                $(childElem).hide();
            });
        }
        /*controlShow : function(parentElem, childElem, eventShow, eventHide){
            $(parentElem).bind(eventShow,function(){
                $(childElem).show();
            }).bind(eventHide,function(){
                $(childElem).hide();
            });
        }*/
        /*
            TODO options - 选项参数
            TODO {
            TODO     elems : {
            TODO         parentElem : ,
            TODO         childElem :
            TODO     },
            TODO     event : {
            TODO         eventShow : ,
            TODO         eventHide :
            TODO     }
            TODO }
         */
        /*controlShow : function(options){
            $(parentElem).bind(eventShow,function(){
                $(childElem).show();
            }).bind(eventHide,function(){
                $(childElem).hide();
            });
        }*/
    }
    window.jd_tool = jd_tool;

    // TODO 封装函数 - 用于控制指定元素的显示与隐藏效果
    /*function controlShow(parentElem, childElem){
        $(parentElem).mouseover(function(){
            $(childElem).show();
        }).mouseout(function(){
            $(childElem).hide();
        });
    }*/

});