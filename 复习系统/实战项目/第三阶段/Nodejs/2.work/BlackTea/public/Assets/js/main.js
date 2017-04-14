$(function(){

	$('.pro_l .p_list li:nth-child(3n)').css('margin-right',0+'px');
	$('.pro_l .p_list li .p_m').mousemove(function(){
		$(this).children('.wen').css('top',0+'px')
	});
	$('.pro_l .p_list li .p_m').mouseleave(function(){
		$(this).children('.wen').css('top','-120%')
	});
	
	$('.more').click(function(){
		$('.tck_bg').css('top',0+'px');
	});
	$('.close').click(function(){
		$(this).parent('.tck').parent('.tck_bg').css('top','100%');
	});
	$('.nav_m .n_icon').click(function(){
		$(this).siblings('ul').slideToggle();
	});
})