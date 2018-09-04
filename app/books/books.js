'use strict';

angular.module('myApp.books', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/books', {
    templateUrl: 'books/books.html',
    controller: 'BooksCtrl'
  });
}])

.factory('booksFactory', ['$http', function($http) {
    var factory = { };

    factory.getBooksApi =  $http.get('http://localhost:3000/books');

    factory.addBookApi =  function(book) {
        return $http.post('http://localhost:3000/books', book);
    };

    return factory;
}])

.service('booksService', ['$http', function($http) {

   this.getBooksApi =  $http.get('http://localhost:3000/books');

   this.addBookApi =  function(book) {
        return $http.post('http://localhost:3000/books', book);
    };

}])


.controller('BooksCtrl', ['$scope', 'booksFactory', 'booksService', function($scope, booksFactory, booksService) {
    $scope.name = 'name  BooksCtrl';


    booksFactory.getBooksApi.then(function(response) {
      //  $scope.books = response.data;
    }, function(error) {
        // error
    });

    booksService.getBooksApi.then(function(response) {
        $scope.books = response.data;
    }, function(error) {
        // error
    });

    $scope.save = function() {

        var bookModel = { title: $scope.title, author: $scope.author };

        booksFactory.addBookApi(bookModel).then(function(response) {
            booksService.getBooksApi.then(function(response) {
                $scope.books = response.data;
            }, function(error) {
                // error
            });
        }, function(error) {
            // error
        });
    };

}]);