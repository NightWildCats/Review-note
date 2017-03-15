/**
 * Created by Administrator on 2017/3/15/015.
 */
(function (w) {
    /**
     * 磁性吸附以及鼠标拖动函数
     * @param obj  拖动目标元素
     * @param obj1 碰撞元素
     */
    w.flag = function (obj,obj1) {
        box.onmousedown = function (ev) {
            var ev = ev || event;
            //初始鼠标位置
            var initial = {};
            initial.left = ev.clientX;
            initial.top = ev.clientY;
            //初始元素位置
            var elemOff = {};
            elemOff.left = obj.offsetLeft;
            elemOff.top = obj.offsetTop;
            //兼容IE 实现全局捕获
            if (obj.setCapture) {
                obj.setCapture();
            }
            //鼠标移动事件
            document.onmousemove = function (ev) {
                var ev = ev||event;
                var news = {};
                news.left = ev.clientX;
                news.top = ev.clientY;
                //位移量
                var dis = {};
                dis.left =  news.left-initial.left;
                dis.top =  news.top-initial.top;
                var left = dis.left + elemOff.left ;
                var top = dis.top + elemOff.top ;
                //实现磁性吸附效果
                if (left<50) {
                    left = 0
                }else if (left>document.documentElement.clientWidth-obj.clientWidth-50) {
                    left = document.documentElement.clientWidth-obj.clientWidth;
                }
                if (top<50) {
                    top = 0
                }else if (top>document.documentElement.clientHeight-obj.clientHeight-50) {
                    top = document.documentElement.clientHeight-obj.clientHeight;
                }
                obj.style.left = left +'px';
                obj.style.top = top +'px';

                //碰撞执行函数
                pz(obj,obj1);

            };
            document.onmouseup = function (ev) {
                console.log(1);
                document.onmouseup = document.onmousemove = document.onmousedown = null;
                //取消捕获
                if (document.releaseCapture) {
                    document.releaseCapture();
                }
                ev.preventDefault();
            };
            return false;
        };
    };


    /**
     * 九宫格碰撞
     * @param obj  拖动目标元素
     * @param obj1 碰撞元素
     */
    w.pz = function (obj,obj1) {

        var L1 = obj.getBoundingClientRect().left;
        var T1 = obj.getBoundingClientRect().top;
        var R1 = obj.getBoundingClientRect().right;
        var B1 = obj.getBoundingClientRect().bottom;

        var L2 = obj1.getBoundingClientRect().left;
        var T2 = obj1.getBoundingClientRect().top;
        var R2 = obj1.getBoundingClientRect().right;
        var B2 = obj1.getBoundingClientRect().bottom;

        //R1<L2   L1>R2  T1>B2	B1<T2
        if(R1<L2 || L1>R2 ||T1>B2||B1<T2){
            obj1.style.background = 'darkorange';
            obj1.innerHTML = '哈哈哈';
        }else{
            obj1.style.background = 'pink';
            obj1.innerHTML = '牛逼的人物';
        }
    }
})(window);