(function(w){
	w.tranformCss = function(node,name,value){
		if(!node.transform){
			node.transform = {};
		}
		if(arguments.length > 2){
			//写
			var result = '';
			//向对象里面添加值
			node.transform[name] = value;
			for (var item in node.transform) {
				switch (item){
					case 'rotate':
					case 'skew':
					case 'skewX':
					case 'skewY':
						result += item + '('+ node.transform[item] +'deg) ';
						break;
					case 'scale':
					case 'scaleX':
					case 'scaleY':
						result += item + '('+ node.transform[item] +') ';
						break;
					case 'translate':
					case 'translateX':
					case 'trnslateY':
						result += item + '('+ node.transform[item] +'px) ';
						break;
				}												
			}
			node.style.transform = result;
		}else{
			//读
			if(typeof node.transform[name] == 'undefined'){
				//默认值
				if(name == 'scale' || name == 'scaleX' || name == 'scaleY'){
					value = 1;
				}else{
					value= 0;
				}
			}else{
				//处理正常值
				value = node.transform[name];
			}
			return value;
		}
	}
})(window);