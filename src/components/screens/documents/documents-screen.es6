app.controller('VerifyScreen', ($scope, $stateParams, Jobs) => {

    var init = () => {};

    init();

    _.extend($scope, {
        getJob: () => Jobs.getJobById($stateParams.id)
    });
});

app.directive('customOnChange', () => (scope, el, attrs) => {
    el.bind('change', scope.$eval(attrs.customOnChange));
});
