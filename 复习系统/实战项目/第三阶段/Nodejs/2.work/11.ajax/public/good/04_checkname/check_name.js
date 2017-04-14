/*
 测试Ajax请求返回HTML数据
	服务器端:
		1. response.setContentType("text/html;charset=utf-8")
		2. 输出一个html格式的字符串
	浏览器端js:
		var result = request.responseText;
		document.getElementById("resultDiv").innerHTML = result;
 */
window.onload = function () {
	//失去焦点的时候发送验证请求
	document.getElementById('name').onblur = function () {

		var username = this.value;
		var xmlHttp = createReq();

		//回调
		xmlHttp.onreadstatechange = function () {
			//返回数据
			if(xmlHttp.readyState === 4 && xmlHttp.status === 200){
				var result = xmlHttp.responseText;

				//获得元素 添加数据
				document.getElementById('resultSpan').innerHTML = result;
			}

		};

		//open 打开连接
		xmlHttp.open('post', 'http://127.0.0.1:3000/node_ajax/test/html');

		//post 设置头
		xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");

		//发送数据
		xmlHttp.send('username=' + username);
	};


    //
	// 前后端人员交互
	// 和服务器人员 协商 商量一个 接口
	// 请求方法	url
	// 		post 	/node_ajax/test/html
	// 前台发出去的数据的格式是什么
	// 		username=XXXX
	// 后台返回的数据的格式是什么
	// 		html字段
	// 联调




};

function createReq() {
	var req = null;
	if(window.XMLHttpRequest) {
		req = new XMLHttpRequest();
	} else {
		req = new new ActiveXObject("Microsoft.XMLHTTP");
	}
	return req;
}