  angular.module('articles').config([
      '$routeProvider',
      function($routeProvider) {
          $routeProvider.
          when('/articles', {
              templateUrl: 'articles/views/list-articles.client.view.html'
          })
          .when('/articles/create', {
              templateUrl: 'articles/views/create-articles.client.view.html'
          })
          .when('/articles/:articlesId', {
              templateUrl: 'articles/views/view-articles.client.view.html'
          })
          .when('/articles/:articlesId/edit', {
              templateUrl: 'articles/views/edit-articles.client.view.html'
          }); 
      }
  ]);