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

;
