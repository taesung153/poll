app.controller('surveyController', ['$scope', '$location', '$route','$routeParams', 'surveyFactory', 'sessionFactory', function(scope, location, route, routeParams, usrveyFact, sessFact){
	scope.new_survey = function(){
		if(!scope.newSurvey || !scope.newSurvey.option1 || !scope.newSurvey.option2|| !scope.newSurvey.option3 || !scope.newSurvey.option4 || !scope.newSurvey.question){
			scope.error = "All 4 options should be filled out"
		}else if(scope.newSurvey.question.length < 8){
			scope.error = "At least 8 characters for Question"
		}else if(scope.newSurvey.option1.option.length < 3|| scope.newSurvey.option2.option.length < 3 || scope.newSurvey.option3.option.length < 3 || scope.newSurvey.option4.option.length< 3 ) {
			scope.error = "At least 3 characters for Options"
		}
		else{usrveyFact.new_survey(scope.newSurvey)}
	}
	var all_surveys = function(){
		usrveyFact.all_surveys(function(data){
			scope.all_surveys = data.data.surveys;
		})
	}
	sessFact.getCurUser(function(data){
		scope.curr_user = data
		if(!scope.curr_user){
			location.url('/login')
		}
	})
	scope.vote1 = function(){
		usrveyFact.vote1(scope.showOne._id)
	}
	scope.vote2 = function(){
		usrveyFact.vote2(scope.showOne._id)
	}
	scope.vote3 = function(){
		usrveyFact.vote3(scope.showOne._id)
	}
	scope.vote4 = function(){
		usrveyFact.vote4(scope.showOne._id)
	}

	if(routeParams.id){
		usrveyFact.getOne(routeParams, function(data){
			scope.showOne = data.data.survey;
		})
	}
	all_surveys();

}])
