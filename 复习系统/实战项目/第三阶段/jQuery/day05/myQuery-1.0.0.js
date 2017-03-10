// TODO 利用自调函数优化全局域命名空间
(function(global){
    /*
        TODO 工厂函数 $()
        TODO * 返回值 - jQuery对象
        TODO * 作用
        TODO   * 使用选择器 - 定位HTML页面元素
        TODO   * 将DOM对象转换成jQuery对象
        TODO   * 创建HTML页面中的元素 - <ul></ul>
     */
    var jQuery = function(selector){
        // TODO selector 为 string 类型

        // TODO 定义一个数组 - 用于存储获取的HTML页面元素集合
        var arr = new Array();

        /*
            TODO 封装选择器的用法
            TODO * #id - '#username'
            TODO * .class - '.mini'
         */
        // TODO 判断当前是不是 id选择器
        if(selector.substring(0,1) == '#'){
            var elemId = selector.substring(1);
            // TODO 返回一定DOM对象
            var element = document.getElementById(elemId);
            arr.push(element);
        }else if(selector.substring(0,1) == '.'){
            var className = selector.substring(1);
            // TODO 返回可能是DOM对象或数组
            var elements = document.getElementsByClassName(className);

            for(var i=0;i<elements.length;i++){
                arr.push(elements[i]);
            }
        }else{
            // TODO 元素选择器
        }
        return arr;

    }
    // TODO 将局部对象提升到全局作用域
    global.$ = global.jQuery = jQuery;
})(window);