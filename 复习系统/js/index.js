
//测试js是否调用成功
//function  Hell() {
//	alert("你好");
//}

$(function() {
	$("#box10,#box11").mouseover(function(e){
		alert("你碰到人家的手啦");
//    $("#box10,#box11").css("background-color", "#FFFF00");
	});
	$(function() {
		$("#box10,#box11").mouseout(function() {
			alert("不要离开人家嘛！");
//			$("#box10,#box11").css("background-color", "blue");
		});
	});
});