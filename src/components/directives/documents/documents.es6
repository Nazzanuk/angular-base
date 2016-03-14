app.component('documentsItem', {
    templateUrl: 'documents.html',
    controllerAs: 'documents',
    bindings: {
        signed:'@'
    },
    transclude: {
        docsList: "?docsList"
    },
    controller: function ($element, $timeout, State) {

        var events = () => {
        };

        var init = () => {
            events();
            console.log(this.documents)
        };

        init();

        _.extend(this, {
            isRecruiter: State.isRecruiter
        });
    }
});

app.component('doc', {
    templateUrl: 'doc.html',
    controllerAs: 'doc',
    transclude: {
        docContent: "?docContent"
    },
    bindings: {
        icon: "@",
        name: "@",
        signed: "="
    },
    controller: function ($element, $timeout, State) {

        var events = () => {
            $element.on('click', function () {
                $(this).toggleClass('active');
                return false;
            })
        };

        var init = () => {
            events();
        };

        init();

        _.extend(this, {});
    }
});
