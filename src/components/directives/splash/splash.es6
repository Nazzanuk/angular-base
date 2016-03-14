app.component('splashItem', {
    templateUrl: 'splash.html',
    controllerAs: 'splash',
    transclude: {},
    bindings: {},
    controller: function ($element, $timeout, State, $state, Alert) {
        _.extend(this, {
            user:"",
            pass:""
        });

        var active = false;

        var validate = () => {
            if (State.verify(this.user, this.pass)) {
                Alert.show("Welcome");
                State.isRecruiter() ? $state.go('home') : $state.go('user');
            } else {
                Alert.show("Incorrect Credentials");
            }
        };

        var init = () => {
            $timeout(() => active = true, 500);
        };

        init();

        _.extend(this, {
            isActive: () => active,
            validate
        });
    }
});
