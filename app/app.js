'use strict';

// Declare app level module which depends on views, and components
angular.module('blog', [
	'ui.router',
	'blog.posts',
	'blog.view2'

]).config(['$urlRouterProvider', '$locationProvider', function($urlRouterProvider, $locationProvider) {
	$locationProvider.hashPrefix('!');

	$urlRouterProvider.otherwise('/posts');
}]);
