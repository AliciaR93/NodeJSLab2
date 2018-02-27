(function() {
  var taskList = {

    templateUrl: "templates/taskList.html",

    controller: function(TodoService) {
      var $ctrl = this;
      $ctrl.addItem = function(item) {
        $ctrl.todoList.push(item);
        // console.log($ctrl.todoList);
      }
      $ctrl.removeItem = function($index) {
        $ctrl.todoList.splice($index, 1);
        // console.log("working");
      }
      $ctrl.todoList = TodoService.getData();
      console.log($ctrl.todoList);
    }
  }
  angular
    .module("app")
    .component("taskList", taskList);
}());
