app.component('usersItem', {
    templateUrl: 'users.html',
    controllerAs: 'users',
    bindings: {
        img: '@',
        heading: '@',
        users:'='
    },
    controller: function ($element, $timeout) {

        var init = () => {
            console.log(this.users)
        };

        init();

        _.extend(this, {

        });
    }
});
