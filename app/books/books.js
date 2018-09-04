(function() {

    'use strict';

    angular.module('myApp.books', ['ngRoute'])
        .config(config)
        .factory('booksFactory', factoryBooks)
        .service('booksService', ServiceBooks)
        .controller('BooksCtrl', controller);

    config.$inject = ['$routeProvider'];
    function config($routeProvider) {
        $routeProvider.when('/books', {
            templateUrl: 'books/books.html',
            controller: 'BooksCtrl'
        });
    }

    factoryBooks.$inject = ['$http'];

    function factoryBooks($http) {
        var factory = { };

        factory.getBooksApi =  $http.get('http://localhost:3000/books');

        factory.addBookApi =  function(book) {
            return $http.post('http://localhost:3000/books', book);
        };

        return factory;
    }


    ServiceBooks.$inject = ['$http'];
    function ServiceBooks($http) {

        this.getBooksApi = $http.get('http://localhost:3000/books');


        this.addBookApi =  function(book) {
            return $http.post('http://localhost:3000/books', book);
        };
    }

    controller.$inject = ['$scope', 'booksFactory', 'booksService'];
    function controller($scope, booksFactory, booksService) {
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
    }

})();