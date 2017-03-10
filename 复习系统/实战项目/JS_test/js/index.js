
//测试连接代码
// function setName(){
// 	alert("niha");
// }
// 
// 点击div时候会实现改变标题的事件
function gaibian() {
	document.title = "哈哈"; //改变标题的值
	var div2 = document.getElementById("div2");// 获取ID值
	alert(div2.id);  //弹出获取的ID
}

//点击DIV跳转到其他的网页上
function tiaozhuan() {
	window.location="http://www.baidu.com";
}

function bianse() {
	var div2 = document.getElementById("div2");
	div2.style.backgroundColor = "blue";
	div2.style.fontSize="50px"; //无效，本来想怎么改变字体的大小（未完成）
	div2.style.color = "red";
	div2.style.border="10px solid yellow";
	div2.style.width = "400px";
	//div2.class="div3"; //测试调用样式是否成功{失败}

}

//鼠标进入事件 
function bian() {
    var div1 = document.getElementById("div1");
    div1.style.backgroundColor = "red";
}

//鼠标离开事情 
function bianhui() {
	var div1 = document.getElementById("div1");
    div1.style.backgroundColor = "yellow";
}

//鼠标进入DIV2是变色，div3显示，离开时div2还原，div3隐藏
function jin() {
	//获取div2的Id
	 var div2 = document.getElementById("div2");
	 div2.style.backgroundColor = "red";
    //获取div3的Id
      var div3 = document.getElementById("div3");
    //实现div3的显示
      div3.style.display = "block";
}

function chu() {
	 var div2 = document.getElementById("div2");
	 div2.style.backgroundColor = "yellow";
     //实现div3的显示
	 var div3 = document.getElementById("div3");
     div3.style.display = "none";
}