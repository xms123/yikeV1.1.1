//该模块(Controllers)用于创建项目所需的所有控制器
angular.module('Controllers',[]).controller("NavContr",["$scope",function($scope){
	//在模型层模拟数据
	$scope.navs = [
		{"link":"#/today","icon":"icon-home","text":"今日一刻"},
		{"link":"#/older","icon":"icon-file-empty","text":"往期内容"},
		{"link":"#/author","icon":"icon-pencil","text":"热门作者"},
		{"link":"#/category","icon":"icon-menu","text":"栏目浏览"},
		{"link":"#/favourite","icon":"icon-heart","text":"我的喜欢"},
		{"link":"#/settings","icon":"icon-cog","text":"设置"}];
}])









