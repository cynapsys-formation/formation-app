(function() {

    'use strict';

    var booksComponent =  {
        templateUrl: 'books/books-page/books-page.html',
        bindings: {},
        controller: Controller
    };


    Controller.$inject = ['booksFactory', 'booksService'];
    function Controller(booksFactory, booksService) {
        var $ctrl = this;

        $ctrl.name = 'name  BooksCtrl';


        this.$onInit = function () {
            booksService.getBooksApi.then(function(response) {
                $ctrl.books = response.data;
            }, function(error) {
                // error
            });
        };


        $ctrl.save = function() {
            var bookModel = { title: $ctrl.title, author: $ctrl.author };
            booksFactory.addBookApi(bookModel).then(function(response) {
                booksService.getBooksApi.then(function(response) {
                    $ctrl.books = response.data;
                }, function(error) {
                    // error
                });
            }, function(error) {
                // error
            });
        };
    }


    angular.module('myApp.books')
        .component('booksPage', booksComponent);

})();