app.controller('sessionController', ['$scope', '$route', '$location', '$routeParams', 'sessionFactory', function(scope, route, location, routeParam, sessionFact){
	scope.curr_user = null

	scope.login = function(){
		if(!scope.loginInstance || !scope.loginInstance.name){
			alert('No empty entries')
		}else{
			sessionFact.login(scope.loginInstance)
		}
	}
	sessionFact.getCurUser(function(data){
		scope.curr_user = data
		if(!scope.curr_user){
			location.url('/login')
		}
	})


}])
