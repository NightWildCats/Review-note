
//实现关联跳转

//实现步骤：
/**
 *  ① 通过坐标定位页面的位置
 *  ② 判断移动的方向 确定向那边进行移动
 * 
 */

$(function(){
	//定义初始的起始坐标 
	var last = {row:0,col:0};
	//定义初始化页面滑动之后的下一个页面的做标牌
	var now = {row:1,col:1};
	//初始化是否移动变量
	var isMoving = false;
	//定义滑动方向
	var direction = {up:1,right:2,down:3,left:4};
	//需要清除默认的滑动事件 
	$(document).on('touchmove',function (event) {
		event.preventDefault();
	});
	
	//定义一个方向判断函数 
	function pageMove (dir) {
		
		// 定义初始化页面    page-1-1 
		lastpage = '.page-' + last.col + '-' + last.row;
		nowpage = '.page-' + now.col + '-' + now.row;
		
		//定义初始化的进入，淡出动画
		outClass = '';
		inClass = '';
		
		//进行方向判断
		switch (dir) {
			case direction.up :
				outClass = 'pt-page-moveToTop';
				inClass = 'pt-page-moveFormBottom'
				break;
			case direction.right :
				outClass = 'pt-page-moveToRight';
				inClass = 'pt-page-moveFormLeft'
				break;
			case direction.down :
				outClass = 'pt-page-moveToBottom';
				inClass = 'pt-page-moveFormTop'
				break;
			case direction.left :
				outClass = 'pt-page-moveToLeft';
				inClass = 'pt-page-moveFormRight'
				break;
		}
		//为页面添加动画开始的类
		$(nowpage).removeClass('hide');
		
		$(lastpage).addClass(outClass);
		$(nowpage).addClass(inClass);
		isMoving = true;
		//处理动画完成时页面的类
		setTimeout(function () {
			$(lastpage).addClass('hide');
			$(lastpage).removeClass(outClass);
			$(lastpage).find('img').addClass('hide');

			
			$(nowpage).removeClass(inClass);
			$(nowpage).find('img').removeClass('hide');
			isMoving = false;
		},600);
	}
	
	// 进行函数的调用
	//向上滑动
	$(document).swipeUp(function(){
			if(isMoving) {
				return;
			}
			//进行复制，将值付给已经影藏的页面
	  		last.row = now.row;
			last.col = now.col;
			
			if(last.col!== 5) {
				now.row = 1;
				now.col = last.col + 1;
				pageMove(direction.up);
			}			
		});
		
	//向下滑动
	$(document).swipeDown(function(){	
			if(isMoving) {
				return;
			}
			//进行复制，将值付给已经影藏的页面
	  		last.row = now.row;
			last.col = now.col;
			
			if(last.col!= 1) {
				now.row = 1;
				now.col = last.col - 1;
				pageMove(direction.down);
			}			
		});
		
	// 向左滑动 
	$(document).swipeLeft(function(){	
			if(isMoving) {
				return;
			}
			//进行复制，将值付给已经影藏的页面
	  		last.row = now.row;
			last.col = now.col;
			
			if(last.col>1 && last.col<5 && last.row == 1 ) {
				now.row = last.row + 1;
				pageMove(direction.left);
			}			
		});

	//向右滑动 
	$(document).swipeRight(function () {
			if(isMoving) {
				return;
			}
			//进行复制，将值付给已经影藏的页面
	  		last.row = now.row;
			last.col = now.col;
			
			if(last.col>1 && last.col<5 && last.row == 2 ) {
				now.row = last.row - 1;
				pageMove(direction.right);
			}			
	});
});


