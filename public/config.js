(function() {
  angular
  .module("app")
  .config(function ($routeProvider){
    $routeProvider
    .when("/home", {
      template: "<welcome-page></welcome-page>"
    })
    .when("/form", {
      templateUrl: "templates/taskForm.html"
    })
    .otherwise({redirectTo: "/home"})
  })


}());
