angular.module("app", []);
angular
    .module("app")
    .controller("todo", todo);

function todo() {
    var vm = this;

    vm.addToDo = function(name, priority) {
        vm.ToDoItem.push(vm.newItem);
        vm.newItem = {};

    };
    vm.ToDoItem = [

    ]

vm.sortfield='';


    vm.prior = [{
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
        }
    ]
}
