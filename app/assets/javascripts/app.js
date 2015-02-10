angular.module('localjam', [])
    .controller('mainCtrl', function($scope, $http) {
      $http.get('lessons').
			  success(function(data, status, headers, config) {
			    $scope.lessons = data;
			  }).
			  error(function(data, status, headers, config) {
			    console.log('somethign went wrong.')
			  });

    	function showLesson(lesson) {
    		$scope.activeLesson = lesson;
    		$scope.isShowLesson = true;
    		$scope.isShowLessons = false;
    	}

    	function showLessons() {
    		$scope.activeLesson = null;
    		$scope.isShowLesson = false;
    		$scope.isShowLessons = true;
    	}

    	function init() {
    		$scope.isShowLessons = true;
    	}

    	$scope.showLesson = showLesson;
    	$scope.showLessons = showLessons;

    	init();
    });










