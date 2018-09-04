(function() {

    'use strict';

    angular.module('myApp.books', ['ngRoute'])
        .config(config);
      //  .controller('BooksCtrl', controller);

    config.$inject = ['$routeProvider'];
    function config($routeProvider) {
        $routeProvider.when('/books', {
          //  templateUrl: 'books/books-page.html',
            template: '<books-page></books-page>'
          //  , controller: 'BooksCtrl'
        });
    }


})();