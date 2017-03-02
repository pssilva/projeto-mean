angular.module('articles').controller( 
  'ArticlesController', [ 
  '$scope', 
  '$routeParams', '$location', 'Authentication', 'Articles', 
  function($scope, $routeParams, $location, Authentication, Articles){ 
      $scope.authentication = Authentication; 

	  $scope.create = function() {
    	var articles = new Articles({
        	title: this.title,
        	content: this.content
    	});

    	articles.$save(function(response) {
        	$location.path('articles/' + response._id);
    	}, function(errorResponse) {
        	$scope.error = errorResponse.data.message;
    	}); 
	  };

	  $scope.find = function() {
      	$scope.articles = Articles.query();
	  };

	  $scope.findOne = function() {
     	 $scope.articles = Articles.get({
        		articlesId: $routeParams.articlesId
       	 });
	   };

      $scope.update = function() {
            $scope.articles.$update(function() {
                $location.path('articles/' + $scope.articles._id);
            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });
      };

        $scope.delete = function(articles) {
            if (articles) {
                articles.$remove(function() {
                    for (var i in $scope.articles) {
                       if ($scope.articles[i] === articles) {
                            $scope.articles.splice(i, 1);
                       }
                    } 
                });
            } else {
                $scope.articles.$remove(function() {
                    $location.path('articles');
                });
            } 
        };

 } 
]); 