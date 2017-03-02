angular.module('articles').factory('Articles',  
    [ 
      '$resource',  
      function($resource) { 
      return $resource( 
          'api/articles/:articlesId',  
          {articlesId: '@_id'},  
          {  
            update: { 
              method: 'PUT' 
            } 
          });  
      } 
    ]); 