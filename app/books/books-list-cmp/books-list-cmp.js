(function() {

    'use strict';

    //  booksListComponent.$inject = [];
    var booksListComponent =  {
        templateUrl: 'books/books-list-cmp/books-list-cmp.html',
        bindings: {
            booksList: '<'
        }
    };

    angular.module('myApp.books')
        .component('booksListCmp', booksListComponent);

})();