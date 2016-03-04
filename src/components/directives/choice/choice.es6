app.component('choiceItem', {
    templateUrl: 'choice.html',
    controllerAs: 'choice',
    bindings: {
        userId: '@',
        img: '@',
        heading: '@',
        subheading: '@'
    },
    controller: function ($element, $timeout) {

        var init = () => {};

        init();

        _.extend(this, {});
    }
});
