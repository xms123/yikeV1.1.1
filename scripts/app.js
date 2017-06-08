// 1、新建模块
var yike = angular.module('yike',[]);
//run方法的作用，模块一旦创建成功立刻执行
//绑定toggle方法到根作用域上
var collapsed = false;
yike.run(['$rootScope',function($rootScope){
	$rootScope.toggle = function(){
		// console.log(111);
		collapsed = !collapsed;
		$rootScope.collapsed = collapsed;
		console.log(collapsed);
		var d = document.querySelectorAll('dd');
		if(collapsed){
			for(var i=0;i<d.length;i++){
				d[i].style.transform='translate(0)';
			}
		}else{
			for(var i=0;i<d.length;i++){
				d[i].style.transform='translate(-100%)';
			}
		}
	}
}]);



