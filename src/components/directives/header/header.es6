app.component('headerItem', {
    templateUrl: 'header.html',
    controllerAs: 'header',
    bindings: {
        img: '@'
    },
    controller: function (Menu, $state, $timeout) {

        var init = () => {
            $timeout(() => $('body').addClass('active'));
        };

        init();

        _.extend(this, {
            isVisible: () => !(!$state.current.name || $state.is("splash")),
            getPages: Menu.getPages,
            setPage: Menu.setPage,
            isCurrentPage: Menu.isCurrentPage
        });
    }
});
