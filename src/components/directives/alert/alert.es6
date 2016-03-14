app.component('alertItem', {
    templateUrl: 'alert.html',
    controllerAs: 'alert',
    transclude: {},
    bindings: {},
    controller: function (Alert) {

        var init = () => {};

        init();

        _.extend(this, {
            show: Alert.show,
            getContent: Alert.getContent,
            isActive: Alert.isActive
        });
    }
});
