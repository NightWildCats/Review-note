JQUERY封装DOM：
 * 赋值和获取操作
   * html() - 等同于DOM的innerHTML属性
   * text() - 设置或获取指定元素的文本内容
   * val() - 设置或获取指定元素的value属性值
 * 属性操作
   * attr() - 获取或设置指定元素的属性值
      * attr(name) - 获取指定元素的属性值
      * attr(name,value) - 设置指定元素的属性值
   * removeAttr(name) - 删除指定元素的属性
 * 样式操作
   * 通过操作HTML页面标签的style属性改变样式
     * css()方法
       * css(name, value)方法
         * name - CSS中的属性名称（例如background等）
         * value - CSS中属性名称对应的值
       * css(object)方法
         {
             name : value,
             name : value,
             ... ...
         }
   * 通过操作HTML页面标签的class属性改变样式
     * addClass()
     * removeClass()
     * toggleClass()
     * hasClass()
 * 遍历节点
   * 同辈元素 - next()+prev()
   * 父子元素 - parent()+children()
   * 祖先与后代 - parents()+find()
 * 插入节点
   * 内部插入节点
   * 外部插入节点

CSS内容的回顾：
 * 位置
   * 绝对定位
   * 相对定位
   * 盒子（框）模型
 DOM的事件对象event：
  * event.pageX/Y
  * event.clientX/Y
  * event.offsetX/Y
DOM树结构（根节点）
 * 元素节点
 * 文本节点
 * 属性节点
节点与元素的区别是什么？
 * 节点 - 标签、文本和属性，并列关系
 * 元素 - 标签及标签的属性或文本，从属关系


JQUERY封装事件：
 * onload事件 - window.onload = function(){}
   * JQUERY提供类似onload事件的方法 - ready()
     * onload事件只能有一个，ready允许编写多个
     * onload编写没有简化写法，ready具有简化
     * onload是在页面（标签、图片、音频或视频等）加载完毕后执行，ready是在DOM树结构加载完毕之后执行
JS库之间的冲突问题："$"符号的使用权的冲突问题
 * 主要的解决方式 - JQUERY放弃"$"的使用权
 * 具体解决方案
   * 先引入JQUERY的库文件 - "$"的使用权是其他JS库的
     * 将"$"替换回"jQuery"使用
   * 后引入JQUERY的库文件 - "$"的使用权是JQUERY的
     * 先调用jQuery.noConflict(); - 主动将"$"的使用权放弃了
