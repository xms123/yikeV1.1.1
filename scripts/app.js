// 1、新建模块
//  依赖前面创建的controller.js中的Controllers模块
var yike = angular.module('yike',["Controllers"]);
//run方法的作用，模块一旦创建成功立刻执行
//绑定toggle方法到根作用域上
var collapsed = false;
yike.run(['$rootScope',function($rootScope){
	$rootScope.toggle = function(){
		// console.log(111);
		collapsed = !collapsed;
		//绑定值
		$rootScope.collapsed = collapsed;
		console.log(collapsed);
		//获取所有的dd节点
		var dd = document.querySelectorAll('.navs dd');
		//遍历
		if(collapsed){
			for(var i=0;i<dd.length;i++){
				dd[i].style.transform='translate(0)';
				//过渡动画的效果
				dd[i].style.transitionDuration=(i+1)*0.3+'s';
				dd[i].style.transitionDelay = '0.2s';
			}
		}else{
			for(var i=0;i<dd.length;i++){
				dd[i].style.transform='translate(-100%)';
				dd[i].style.transitionDuration=(dd.length-i)*0.3+'s';
				dd[i].style.transitionDelay = '';
			}
		}
	}
}]);



