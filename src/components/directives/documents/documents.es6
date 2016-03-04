app.component('documentsItem', {
    templateUrl: 'documents.html',
    controllerAs: 'documents',
    bindings: {},
    controller: function ($element, $timeout) {

        var init = () => {
            console.log(this.documents)
        };

        init();

        _.extend(this, {

        });
    }
});
