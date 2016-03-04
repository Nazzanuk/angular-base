app.controller('HomeScreen', ($element, $timeout, $scope, Users) => {

    var init = () => {
        //$timeout(() => $element.find('[screen]').addClass('active'), 50);
    };

    init();

    _.extend($scope, {
        getUsers: Users.getUsers
    });
});



