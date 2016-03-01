app.component('contentItem', {
    templateUrl: 'content.html',
    controllerAs: 'content',
    transclude:{
        content:'?content'
    },
    bindings: {
    },
    controller: function ($element, $timeout) {

        var init = () => {};

        init();

        _.extend(this, {});
    }
});
