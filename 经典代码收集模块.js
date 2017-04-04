
//跨浏览器的事件对象--获取 ‘event’ ‘target’ ‘事件默认行为的阻止’ (重要*)

var EventUtil = {
  /**
   * 事件回调函数设置
   * @param element 事件触发元素
   * @param type 触发事件的类型
   * @param handler 回调函数
   */
  addHandler: function (element, type, handler) {
    //省略的代码
    //参考 ：跨浏览器的事件处理程序 回调函数 （重要*）
    if (element.addEventListener) {
      element.addEventListener(type, handler, false);
    } else if (element.attachEvent) {
      element.attachEvent("on" + type, handler);
    } else {
      element["on" + type] = handler;
    }
  },
  getEvent: function (event) {
    return event ? event : window.event;
  },
  getTarget: function (event) {
    return event.target || event.srcElement;
  },
  preventDefault: function (event) {
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
  },
  removeHandler: function (element, type, handler) {
    //省略的代码
    //参考 ：跨浏览器的事件处理程序 回调函数 （重要*）
    if (element.removeEventListener) {
      element.removeEventListener(type, handler, false);
    } else if (element.detachEvent) {
      element.detachEvent("on" + type, handler);
    } else {
      element["on" + type] = null;
    }
  },
  stopPropagation: function (event) {
    if (event.stopPropagation) {
      event.stopPropagation();
    } else {
      event.cancelBubble = true;
    }
  },
  //滚动条事件 其他浏览器使用 ‘mousewheel’事件 火狐采用 ‘DOMMouseScroll’事件
  getWheelDelta: function(event) {
    if (event.wheelDelta) {
      return (client.engine.opera && client.engine.opera < 9.5 ?
          -event.wheelDelta : event.wheelDelta);
    } else {
      return -event.detail * 40;
    }
  }
};

// 跨浏览器的事件处理程序 回调函数 （重要*）
var EventUtil = {
  /**
   * 事件回调函数设置
   * @param element 事件触发元素
   * @param type 触发事件的类型
   * @param handler 回调函数
   */
  addHandler: function(element, type, handler){
    if (element.addEventListener){
      element.addEventListener(type, handler, false);
    } else if (element.attachEvent){
      element.attachEvent("on" + type, handler);
    } else {
      element["on" + type] = handler;
    }
  },
  //事件回调函数移出
  /**
   * 清除元素绑定的事件还可以使用 DOM0的方式 例子：btn.onclick = null 的方式进行处理
   */
  removeHandler: function(element, type, handler){
    if (element.removeEventListener){
      element.removeEventListener(type, handler, false);
    } else if (element.detachEvent){
      element.detachEvent("on" + type, handler);
    } else {
      element["on" + type] = null;
    }
  }
};

// 一个函数 多事件处理 （注重这学习样的用法）
/**
 *一个函数 多事件处理
 * @param event event事件监听
 */
var btn = document.getElementById("myBtn");
var handler = function(event){
  switch(event.type){
    case "click":
      alert("Clicked");
      break;
    case "mouseover":
      event.target.style.backgroundColor = "red";
      break;
    case "mouseout":
      event.target.style.backgroundColor = "";
      break;
  }
};
// 事件调用
btn.onclick = handler;
btn.onmouseover = handler;
btn.onmouseout = handler;

//计算页面坐标的位置
/**
 * 参数说明：
 * pageX 鼠标在视口的位置 （水平）
 * pageY 鼠标在视口的位置 （垂直）
 */
var div = document.getElementById("myDiv");
EventUtil.addHandler(div, "click", function(event){
  event = EventUtil.getEvent(event);
  var pageX = event.pageX,
      pageY = event.pageY;
  if (pageX === undefined){
    pageX = event.clientX + (document.body.scrollLeft ||
        document.documentElement.scrollLeft);
  }
  if (pageY === undefined){
    pageY = event.clientY + (document.body.scrollTop ||
        document.documentElement.scrollTop);
  }
  alert("Page coordinates: " + pageX + "," + pageY);
});

//求距离 屏幕的位置
// 水平距离屏幕的位置 event.screenX  垂直距离水平的位置 event.screenY


//兼容的滚轮事件方法 （重要*）
define(function(require, exports, module) {
  //向外暴露 addEvent 方法
  exports.addEvent = (function(window, undefined) {
    var _eventCompat = function(event) {
      var type = event.type;
      if (type == 'DOMMouseScroll' || type == 'mousewheel') {
        event.delta = (event.wheelDelta) ? event.wheelDelta / 120 : -(event.detail || 0) / 3;
      }
      //alert(event.delta);
      if (event.srcElement && !event.target) {
        event.target = event.srcElement;
      }
      if (!event.preventDefault && event.returnValue !== undefined) {
        event.preventDefault = function() {
          event.returnValue = false;
        };
      }
      /*
       ......其他一些兼容性处理 */
      return event;
    };
    if (window.addEventListener) {
      return function(el, type, fn, capture) {
        if (type === "mousewheel" && document.mozHidden !== undefined) {
          type = "DOMMouseScroll";
        }
        el.addEventListener(type, function(event) {
          fn.call(this, _eventCompat(event));
        }, capture || false);
      }
    } else if (window.attachEvent) {
      return function(el, type, fn, capture) {
        el.attachEvent("on" + type, function(event) {
          event = event || window.event;
          fn.call(el, _eventCompat(event));
        });
      }
    }
    return function() {};
  })(window);
});

//滚轮事件使用方法
/**
 * @dom 触发元素
 * @mousewheel 滚轮事件 其他浏览器使用 ‘mousewheel’事件 火狐采用 ‘DOMMouseScroll’事件
 * @fn 事件处理回调函数
 */
addEvent(dom, "mousewheel", function(event) {
  if (event.delta < 0) { alert("鼠标向上滚了！"); }
});

//键盘事件
/**
 * @keydown 当用户按下键盘上的任意键时触发
 * @keypress 当用户按下键盘上的字符键时触发
 * @keyup 当用户释放键盘上的键时触发
 */
//获取键码
EventUtil.addHandler(document, "keydown", function(event){
  event = EventUtil.getEvent(event);
  console.log(event.keyCode);
});

//移动事件
/*
    touchstart：当手指触摸屏幕时触发
    touchmove：当手指在屏幕上滑动时连续地触发
    touchend：当手指从屏幕上移开时触发

 */
//移动端获取屏幕位置信息的代码
document.addEventListener('touchstart',function (event) {
  // 移动端事件 通过event下的 ‘changedTouches[0]’ / ‘touches[0]’ / ‘targetTouches[0]’
  /**
   * @changedTouches[0] 当前事件上手指列表集合
   * @touches[0] 屏幕上手指列表集合
   * @targetTouches 当前元素上手指列表集合
   */
  var touchChanged = event.changedTouches[0];
  var touchTarget = event.targetTouches[0];
  var touches = event.touches[0];
});

/**
 * 读取样式、
 * @param obj 读取样式的元素
 * @param stylename 读取的样式名
 * @returns {*} 返回读取的样式值
 */
function getStyle (obj,stylename) {
    //判断window中是否有getComputedStyle这个方法
    if (window.getComputedStyle) {
      return getComputedStyle(obj,null)[stylename]
    } else {
      //IE8以下的浏览器 使用的方法
      return obj.currentScale[stylename];
    }
    //下面可以使用三目运算进行 返回元素对应的属性值
    //return window.getComputedStyle ? getComputedStyle(obj,null)[stylename] :obj.currentScale[stylename];
}

//鼠标右键自定义菜单 （oncontextmenu 鼠标右键事件）
//获取自定义右键菜单的元素
var customContextMenu = document.getElementById("customContextMenu");
document.oncontextmenu = function (ev) {
  //清除浏览器默认行为
  ev.preventDefault();
  customContextMenu.style.left = ev.clientX + "px";
  customContextMenu.style.top = ev.clientY + "px";
  customContextMenu.style.display = "block";
};
//单击隐藏
document.onclick = function () {
  customContextMenu.style.display = "none";
};

//文件读取
/**
 * @注意 ：let 是ES6标准的块作用域的变量声明（不能进行变量提升）
 */
function  readFile(ev) {
  var files = ev.target.files;
  //循环遍历
  var len = files.length;
  for (var i = 0; i < len; i++) {
    //文件对象
    var fileObj = files[i];
    let fileR = new  FileReader();
    //获取选取文件的地址
    fileR.readAsDataURL(fileObj);
    //文件文本的读取
    // fileR.readAsText(fileObj);
    //文件对象加载完之后进行显示信息
    fileR.addEventListener("load",function () {
      let img = new Image();
      img.src = fileR.result;
      imgsDom.appendChild(img);
      //接受/显示 选取的文件的文本
      // input.value = fileR.result;
    });
  }
}

//拖放事件
/**
 *拖放的步骤:
 （1）拖动什么元素 -> ondragstart 事件 ev.dataTransfer.setData方法
 （2）元素拖放到什么地方 -> ondragover 事件
 （3）进行放置 -> ondrop 事件 ev.dataTransfer.getData()方法
 注意：其中步骤2和步骤3作用在需要容纳的对象上

 当元素设置属性 draggable=“true” 时 元素为可拖放的元素 。为false时取消拖放
 */
var dropDivDom = document.querySelector(".drop-div");
var dragBoxDom = document.querySelector(".drag-box");
//定义一个存取拖拽元素的变量
var tuoDom ;
dragBoxDom.ondragstart = function (ev) {
  //获取拖拽元素的
  if (ev.target.id.indexOf("item")>-1) {
    tuoDom= ev.target;
  } else {
    tuoDom = null;
  }
};
//释放区元素
dropDivDom.ondragover= function (ev) {
  ev.preventDefault();
};
dropDivDom.ondrop = function (ev) {
  if (tuoDom != null) {
    //深度克隆 cloneNode(true)
    var cooklDom = tuoDom.cloneNode(true);
    dropDivDom.appendChild(cooklDom);
  }
};

//PC端 拖拽移动模板

//移动端 拖拽移动模板

//rem适配

//viewport适配

//