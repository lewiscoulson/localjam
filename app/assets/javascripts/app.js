angular.module('localjam', [])
    .controller('mainCtrl', function($scope) {
        $scope.lessons = [{"id":10,"title":"lesson 1","video":"video.mov","notes":"lesson notes","created_at":"2015-02-06T15:36:49.853Z","updated_at":"2015-02-06T15:36:49.853Z"},{"id":11,"title":"lesson 2","video":"vid.mov","notes":"lesson 2 notes","created_at":"2015-02-06T15:38:58.894Z","updated_at":"2015-02-06T15:38:58.894Z"},{"id":12,"title":"lesson 3","video":"3.mov","notes":"lesson 3 notes","created_at":"2015-02-06T16:41:16.861Z","updated_at":"2015-02-06T16:41:16.861Z"}]
    
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










