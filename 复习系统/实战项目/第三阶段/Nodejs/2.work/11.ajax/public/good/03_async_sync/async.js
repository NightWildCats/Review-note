/*
 	测试Ajax同步请求和异步请求:
 	1. 如何设置请求的同步或异步?
 		request.open(method, url, async)  
 		第3个参数就是用来指定是否异步, 默认是true(异步), 设置为false代表同步
 	2. 同步请求与异步请求的区别?
 		1). 执行: request.send()
 		2). 异步: 此方法立即返回, 后面立即获取请求结果数据得不到, 只能在监听回调中获取(当结果数据返回后回调)
 		3). 同步: 此方法不会立即返回, 只有在服务器返回结果才返回, 在后面可以直接获取返回的结果数据, 没有必要再设置监听回调
 */
/*
 测试post类型的Ajax请求
 1. 创建一个xmlhttpRequest对象
 2. 设置回调监听
 3. 打开一个连接
 4. 设置请求头
 5. 发请求
 */

window.onload = function () {

	document.getElementById('asyncBtn').onclick = function () {
		var xmlhttp = createXMLhttp();
		//设置回调函数
		xmlhttp.onreadystatechange = function () {
			if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
				//业务逻辑
				var result = xmlhttp.responseText; //以文本的形式获得数据
				console.log('bbb');
				console.log(xmlhttp.responseText);	//获得数据
			}
		};
		//打开
		xmlhttp.open('post', '/node_ajax/test/async_sync2', true );
		//异步的特点：事件触发，回调函数被执行

		//如果你需要发送数据到服务器，那么必须设置头，解析请求体中的内容
		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");

		//发送数据
		xmlhttp.send('username=wukong');
		console.log('aaa');
		console.log(xmlhttp.responseText);	//获得数据


	};

	document.getElementById('syncBtn').onclick = function () {
		var xmlhttp = createXMLhttp();

		//打开
		xmlhttp.open('post', '/node_ajax/test/async_sync2', false );
		//同步的特点：没有事件触发，没有回调函数

		//如果你需要发送数据到服务器，那么必须设置头，解析请求体中的内容
		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");

		//发送数据
		xmlhttp.send('username=wukong');
		//卡在此处，一直等待返回数据
		console.log('aaa');
		console.log(xmlhttp.responseText);	//获得数据

	};
	
	function createXMLhttp() {
		var xmlhttp;
		if(window.XMLHttpRequest){
			xmlhttp = new XMLHttpRequest();
		}else {
			xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
		}

		return xmlhttp;
	}
};