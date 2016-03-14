app.component('sidebarItem', {
    templateUrl: 'sidebar.html',
    controllerAs: 'sidebar',
    bindings: {},
    controller: function ($element, $timeout, State) {

        var init = () => {
        };

        init();

        _.extend(this, {
            isActive: State.isSidebarActive,
            hide: State.hideSidebar
        });
    }
});
