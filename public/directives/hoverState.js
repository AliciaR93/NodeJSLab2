(function() {
  function hoverState () {
    return {
      link: function($scope, $element, $attrs) {
        $element.on("mouseover", function () {
        $element.css("color", '#bbb');
      });

      $element.on("mouseout", function() {
        $element.css("color", 'black');
      });
    }
  }
  }
  angular
    .module("app")
  .directive("hoverState", hoverState);

}());
