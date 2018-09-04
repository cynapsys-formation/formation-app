(function() {

    'use strict';

    angular.module('myApp.books')
        .directive('booksList', booksListDirective);

    booksListDirective.$inject = [];
    function booksListDirective() {
        return {
            restrict: 'E',
            templateUrl: 'books/books-list/books-list.html'
        };
    }

})();