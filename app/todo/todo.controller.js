(function() {
    'use strict';

    angular
        .module('app')
        .controller('TodoController', TodoController);

    TodoController.$inject = [];

    /* @ngInject */
    function TodoController() {
        var vm = this;

        vm.todoItems = [];
        vm.sortField='';
        vm.priorities = [{
                type: 'High',
                value: 1
            },
            {
                type: 'Medium',
                value: 2
            },
            {
                type: 'Low',
                value: 3
            }];

        vm.addTodo = function(name, priority) {
            vm.todoItems.push(vm.newItem);
            vm.newItem = {};
        };
    }
})();
