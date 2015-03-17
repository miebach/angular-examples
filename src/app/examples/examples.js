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
        templateUrl: 'examples/examples.tpl.html'
      }
    },
    data:{ pageTitle: 'Examples' }
  });
})

.directive('simpleDirective', function(){
    return {
        restrict: "E",
        template: "<span>Simple directive</span>"
    };
})
;
