//添加脚本
     var clock = document.querySelector(".clock");
     for(var i=0; i<60; i++){
         var li = document.createElement("li");
         li.style.transform = "rotate("+i*6+"deg)";
         clock.appendChild(li);
     }
    var sec = document.querySelector(".sec");
    var min = document.querySelector(".min");
    var hour = document.querySelector(".hour");
    var zb = document.querySelector("#zb");
     setInterval(function(){
         var date = new Date();
         var seconds = date.getSeconds();
         var minutes = date.getMinutes();
         var hours = date.getHours();
         sec.style.transform = "rotate(" + seconds*6 + "deg)";
         min.style.transform = "rotate(" + minutes*6 + "deg)";
         hour.style.transform = "rotate(" + hours*(5*6) + "deg)";
     }, 1000);
//<!--钟表显示时间开始-->
		function startTime(){
				var today=new Date();
				var h=today.getHours();
				var m=today.getMinutes();
				var s=today.getSeconds();
				var y=today.getFullYear()
				var m1=today.getMonth();
				var r=today.getDate();
				
				m=checkTime(m);
				s=checkTime(s);
				document.getElementById('zb').innerHTML=y+"年"+ (m1+1) +"月"+r+"日" + h+":"+m+":"+s;
				t=setTimeout('startTime()',500);
			}
		
			function checkTime(i)
			{
			if (i<10) 
			  {i="0" + i;}
			  return i;
			}
//			<!--钟表显示时间开始-->