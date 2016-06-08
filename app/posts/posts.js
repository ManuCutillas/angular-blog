'use strict';

/*
** Module
*/

angular.module('blog.posts', ['ui.router'])



/*
** Views
*/

.config(['$stateProvider', function($stateProvider) {
	$stateProvider.state('listPosts', {
		url: '/posts',
		controller: 'ListPostsController',
		templateUrl: 'posts/listPosts.html'
	});

	$stateProvider.state('viewPost', {
		url: '/posts/:id/:permalink',
		controller: 'ViewPostController',
		templateUrl: 'posts/viewPost.html'
	});
}])



/*
** Controllers
*/

.controller('ListPostsController', ['$scope', 'postsService', function($scope, postsService) {
	$scope.getAllPosts = function() {
		return postsService.getAll();
	};

	$scope.posts = $scope.getAllPosts();

}])

.controller('ViewPostController', ['$stateParams', '$state', '$scope', 'postsService', function($stateParams, $state, $scope, postsService) {
	$scope.getPostById = function(id) {
		return postsService.getPostById(id);
	};

	$scope.closePost = function() {
		$state.go('postsList');
	};

	$scope.viewPost = $scope.getPostById($stateParams.id);
}])



/*
** Services
*/

.factory('postsService', function() {
	return {
		posts: [{
			id: 1,
			title: 'Simple title 1',
			content: 'Sample content...',
			permalink: 'simple-title1',
			author: 'author',
			datePublished: '2016-06-01'

		}, {
			id: 2,
			title: 'Simple title 2',
			content: 'Sample content...',
			permalink: 'simple-title2',
			author: 'author',
			datePublished: '2016-06-02'

		}, {
			id: 3,
			title: 'Simple title 3',
			content: 'Sample content...',
			permalink: 'simple-title3',
			author: 'author',
			datePublished: '2016-06-03'

		}, {
			id: 4,
			title: 'Simple title 4',
			content: 'Sample content...',
			permalink: 'simple-title4',
			author: 'author',
			datePublished: '2016-06-04'
		}],

		getAll: function() {
			return this.posts;
		},

		getPostById: function(id) {
			for (var i in this.posts) {
				if (this.posts[i].id == id)
					return this.posts[i];
			}
		}
	}
});
