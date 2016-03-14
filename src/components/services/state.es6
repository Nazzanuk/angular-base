app.service('State', ($state, $stateParams, $timeout, $q) => {

    var currentAuth = 3, sidebarActive = false;

    var isLoggedIn = () => currentAuth != -1;

    var auths = [
        {user: "recruiter", pass: "recruiter", type: "recruiter"},
        {user: "client", pass: "client", type: "client"},
        {user: "r", pass: "r", type: "recruiter"},
        {user: "", pass: "", type: "recruiter"},
        {user: "c", pass: "c", type: "client"}
    ];

    var verify = (user, pass) => {
        console.log("user, pass", user, pass);
        currentAuth = _.findIndex(auths, {user, pass});
        return isLoggedIn();
    };

    var getAuth = () => {
        if (isLoggedIn()) {
            return auths[currentAuth];
        }
    };

    var isRecruiter = () => {
        return isLoggedIn() ? auths[currentAuth].type == 'recruiter' : false;
    };

    var init = () => {
    };

    init();

    return {
        verify,
        getAuth,
        isRecruiter,
        isLoggedIn,
        isSidebarActive: () => sidebarActive,
        showSidebar: () => sidebarActive = true,
        hideSidebar: () => sidebarActive = false
    }
});

