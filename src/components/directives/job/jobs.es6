app.component('jobsItem', {
    templateUrl: 'jobs.html',
    controllerAs: 'jobs',
    bindings: {
        img: '@',
        heading: '@',
        jobs:'='
    },
    controller: function ($element, $timeout) {

        var init = () => {
            console.log(this.jobs)
        };

        init();

        _.extend(this, {

        });
    }
});
