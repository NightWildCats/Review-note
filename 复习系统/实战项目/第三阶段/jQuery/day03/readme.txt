JQUERY封装事件：
 * 页面加载问题 - ready()方法
 * 多库共存问题
 * 事件的绑定与解绑
   * 绑定 - bind()方法、on()方法（live()方法） - bind()方法的底层使用的就是on()方法
     * bind() - 最初使用的事件绑定方法
     * on() - 所有事件绑定方法的底层逻辑
     * live() - 在新版本中弃用了
     * one() - 绑定事件只触发一次
   * 解绑 - unbind()方法、off()方法（die()方法）
 * 模拟事件
JQUERY的动画：
 * 基本动画 - 改变高度和宽度
   * 显示 - show()
     * show() - 无动画效果的显示方法
     * show(speed) - 有动画效果的显示方法
       * speed - 预定义的三个速度(slow、normal和fast),指定毫秒值
   * 隐藏 - hide()
     * hide() - 无动画效果的显示方法
     * hide(speed) - 有动画效果的显示方法
       * speed - 预定义的三个速度(slow、normal和fast),指定毫秒值
   * toggle() - show()+hide()
 * 滑动动画 - 改变高度
   * slideDown() - 向下滑动效果
   * slideUp() - 向上滑动效果
   * slideToggle() - slideDown()+slideUp()
 * 淡入淡出 - 改变透明度
   * fadeIn() - 淡入动画效果
   * fadeOut() - 淡出动画效果
 * 自定义动画 - CSS中的有关颜色的属性都不能使用
   * 方法
     * animate(params,duration,callback)
     * animate(params,options)
   * 效果
     * 并发效果
       .animate({
            样式1 : 值1,
            样式2 : 值2
        })
       .animate({
            样式1 : 值1
        }).animate({
            样式2 : 值2
        },{
            queue : false
        })
     * 排队效果
       .animate({
            样式1 : 值1
        }).animate({
            样式2 : 值2
        })
JQUERY的类数组操作：
 * 全局函数与对象方法
   * 全局函数:$.each() - jQuery.each()
     * $ - jQuery
   * 对象方法:$().each()
     * $() - 工厂函数
     * 返回值 - jQuery对象
 *