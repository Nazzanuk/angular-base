var app = angular.module('app', ['ui.router', 'ngTouch']);

app.directive('ngEnter', () => (scope, element, attrs) => {
    element.bind('keypress', (event) => {
        if (event.which !== 13) return;
        scope.$apply(() => scope.$eval(attrs.ngEnter, {$event: event}));
        event.preventDefault();
    });
});

app.run(($state, $timeout) => {
    //$timeout(() => $state.transitionTo('splash', {}, {location: "replace"}));
});