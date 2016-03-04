app.controller('UserScreen', ($scope, $stateParams, Users) => {

    var init = () => {

    };

    init();

    _.extend($scope, {
        getUser: () => Users.getUserById($stateParams.id)
    });
});



