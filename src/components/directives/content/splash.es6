app.component('splashItem', {
    templateUrl: 'splash.html',
    controllerAs: 'splash',
    transclude: {},
    bindings: {},
    controller: function ($element, $timeout) {

        var active = false;

        var init = () => {
            $timeout(() => active = true, 500);
        };

        init();

        _.extend(this, {
            isActive: () => active

        });
    }
});
