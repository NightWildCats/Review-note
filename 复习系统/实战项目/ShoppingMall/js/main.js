//alert("hello,你好");
    	$(function() {
    		var z=6;
    		//鼠标进入事件
    		$(".sd ol li").mouseover(function() {
    			//$(this).attr("class","sdl ol li:hover ");
    			//alert($(this).index());
    			$(this).siblings().attr("class"," ");
    			
    			//获取对应的索引值
    			var num = $(this).index();
    			$(".sd ul li").eq(num).css("left","650px");
    			// 提升z-index的值
    			z++;
    			$(".sd ul li").eq(num).css("z-index",z);

    			$(".sd ul li").eq(num).animate({left:'0'},500);

    		});
    	});

