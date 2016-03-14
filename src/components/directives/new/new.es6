app.component('newItem', {
    templateUrl: 'new.html',
    controllerAs: 'new',
    bindings: {
        firstName: "@",
        lastName: "@",
        role: "@",
        email: "@"
    },
    controller: function ($element, $timeout, Users, $state, Alert) {

        var addUser = () => {
            if (!_.every(this)) {
                Alert.show('All fields are required');
                return;
            }
            Users.addUser(new User(this.firstName + " " + this.lastName, this.role, this.email, 0));
            $state.transitionTo('home', {}, {location: "replace"});
        };

        var init = () => {
        };

        init();

        _.extend(this, {
            addUser
        });
    }
});
