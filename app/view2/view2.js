'use strict';

angular.module('blog.view2', ['ui.router']).config(['$stateProvider', function($stateProvider) {
	$stateProvider.state('view2', {
		url: '/view2',
		controller: 'View2Ctrl',
		templateUrl: 'view2/view2.html'
	});

}]).controller('View2Ctrl', [function() {

}]);
