(function() {
function FormController(TodoService) {
  var $ctrl = this;
  var todoList = [{task: "Walk the dogs"}];
  refreshDataFromServer();

  $ctrl.setData = function(newItemText){
    var newTask = {
      text: newItemText
    };
    document.getElementById("todo-list").value ="";
    TodoService.addTask(newTask).then(function(){
      refreshDataFromServer();
    });
  }
  $ctrl.removeItem = function(taskId){
    TodoService.deleteTask(taskId).then(refreshDataFromServer);
  }
  function refreshDataFromServer(){
    TodoService.getAllTasks().then(function(tasks){
      $ctrl.todoList = tasks;
    });
  }
}
angular
.module("app")
.controller("FormController", FormController);
}());
