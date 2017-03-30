(function() {
    'use strict';

    angular
        .module('app')
        .controller('TodoController', TodoController);

    TodoController.$inject = ['todoFactory'];

    /* @ngInject */
    function TodoController(todoFactory) {
        var vm = this;

        vm.todoItems = [];
        vm.sortField='';
        vm.priorities = [1,2,3];
        activate ();
        function activate(){
          todoFactory
          .getAll()
          .then(function(data){
            vm.todoItems=data;
          });
        }
        vm.addTodo = function() {
          todoFactory
          .create({
            "text": vm.newItem.text,
            "priority": vm.newItem.priority
          })
          .then(function(data){
            vm.todoItems.push(data);
          });
        };
        vm.byebye = function(todoItem) {
          todoFactory
          .remove(
              todoItem.todoItemID
          )
          .then(function(data){
              vm.todoItems.splice(vm.todoItems.indexOf(todoItem),1);
          });
        };
        vm.clearSkyRadio = function(){
          todo.inField = "";
          todo.inField2 = "";
        }
    }
})();
