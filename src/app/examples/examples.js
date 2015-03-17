angular.module( 'ngBoilerplate.examples', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'examples', {
    url: '/examples',
    views: {
      "main": {
        controller: 'ExamplesCtrl',
        templateUrl: 'examples/examples.tpl.html'
      }
    },
    data:{ pageTitle: 'Examples' }
  });
})

.controller( 'ExamplesCtrl', function ExamplesCtrl( $scope ) {
  $scope.resetItems2 = function() {
    $scope.items = [];
  };
  $scope.setItems2 = function() {
    $scope.items = [
      "First item",
      "Second item",
      "Third item"
    ];
  };
  
  $scope.controllerCallbackThree = function(paramA, paramB) {
    alert(paramA + paramB);
  };
  $scope.dataA = "Parent scope callback received parent ";
  $scope.dataB = "scope data from directive.";
})

.directive('simpleDirectiveOne', function(){
    return {
        restrict: "E",
        template: "<span>Simple directive</span>"
    };
})

.directive('simpleDirectiveTwo', function() {
  return {
    scope: {
      items: '='
    },
    template: '<div><ul ng-repeat="item in items">' +
              '<li>{{item}}</li>' +
              '</ul></div>',
    replace: true
  };
})

.directive('simpleDirectiveThree', function() {
  return {
    scope: {
      callback: '&attrCallbackThree'
    },
    link: function(scope, element, attrs) {
      element.on("click", function() {
        // http://stackoverflow.com/a/15898034/1431660
        // One reason to not use two-way binding:
        // sometimes you don't want to add additional scope properties for values
        // that are only needed by the callback functiom
        scope.callback({
          // In a real use case this could depend on
          // user interaction, calculation, resource interaction
          // but for demonstration purpose we only access some parent
          // scope vars and pass them to the callback. The point is that
          // the current values of dataA and dataB are accessed and not
          // at the moment of compilaiton
          a: scope.$parent.dataA,
          b: scope.$parent.dataB
        });
      });
    }
  }
})
        

;
