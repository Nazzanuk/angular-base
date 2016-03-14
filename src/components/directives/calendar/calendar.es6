app.component('calendarItem', {
    templateUrl: 'calendar.html',
    controllerAs: 'calendar',
    bindings: {
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
