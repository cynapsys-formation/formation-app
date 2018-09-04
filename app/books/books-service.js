(function() {

    'use strict';

    angular.module('myApp.books')
        .factory('booksFactory', factoryBooks)
        .service('booksService', ServiceBooks);


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

})();