app.service('Alert', ($timeout, $rootScope) => {

    var active = false, content = "", timeout;

    var show = (text) => {
        console.log('show', text);
        content = text;
        active = true;
        $timeout.cancel(timeout);
        timeout = $timeout(() => active = false, 2000);
    };

    var init = () => {
    };

    init();

    return {
        show: show,
        getContent: () => content,
        isActive: () => active
    };
});

