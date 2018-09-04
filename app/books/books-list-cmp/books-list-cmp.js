(function() {

    'use strict';

    var booksListComponent =  {
        templateUrl: 'books/books-list-cmp/books-list-cmp.html',
        bindings: {
            booksList: '<'
        },
        controller: BooksListController
    };

    BooksListController.$inject = ['booksFactory'];
    function BooksListController(booksFactory) {

        var $ctrl = this;

        this.$onChanges = function (changes) {

            console.log('$onChanges BooksListController', changes);
        };


        this.$onInit = function () {
            console.log('$onInit BooksListController');

            booksFactory.getBooksApi.then(function(response) {
                $ctrl.books = response.data;
            }, function(error) {
                // error
            });


        };

    }

    angular.module('myApp.books')
        .component('booksListCmp', booksListComponent);

})();