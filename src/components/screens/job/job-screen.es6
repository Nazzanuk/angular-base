app.controller('JobScreen', ($scope, $stateParams, Jobs) => {

    var init = () => {

    };

    init();

    _.extend($scope, {
        getJob: () => Jobs.getJobById($stateParams.id)
    });
});



