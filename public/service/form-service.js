(function() {
  function TodoService($http) {
    return {
      getAllTasks: getAllTasks,
      addTask: addTask,
      deleteTask: deleteTask
    }
    function addTask(item) {
      return $http({
        method: "POST",
        url: "/tasks",
        data: item
      });
    };
    function deleteTask(itemid){
      // console.log(itemid);
      return $http ({
        method: "DELETE",
        url: "/tasks/" + itemid
      });
    }
    function getAllTasks(){
      return $http({
        method: "GET",
        url: "/tasks"
      }).then(function(response){
        return response.data;
      });
    }
  }
//     // var todoList = [];
//     // this.getAllTasks = getAllTasks;
//     this.addItem = addItem;
//     this.deleteItem = deleteItem;
//     return $http ({
//       method: "GET",
//       url: "/tasks"
//     }).then(function(response){
//       return response.data;
//     });
//   };
// function addItem(item){
//   // addTask(task) {
//     return $http ({
//       method: "POST",
//       url: "/tasks",
//       data: task
//     });
//   };
// // }
//   function deleteItem(taskId) {
//     return $http({
//       method: "DELETE",
//       url: "/tasks/" + taskId
//     });
//   };
// var app = angular.module("app");
// app.service("TodoService", TodoService);
  //   return {
  //     getData: getData,
  //     setData: setData
  //   }
  //   function getData() {
  //     return todoList;
  //   }
  //   function setData(list) {
  //     todoList = list;
  //   }
  // }
  angular
    .module("app")
    .factory("TodoService", TodoService);
})();
