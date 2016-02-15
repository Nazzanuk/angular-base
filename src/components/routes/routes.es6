app.config(($stateProvider, $urlRouterProvider, $locationProvider) => {

    //this controls the animations for each transition
    var resolve = {
        timeout: ($timeout) => {
            $('[screen]').removeClass('active');
            $timeout(() => $('[screen]').addClass('active'), 350);
            return $timeout(300);
        }
    };

    // For any unmatched url, redirect to /
    $urlRouterProvider.otherwise("/");

    // Now set up the states
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: "home-screen.html",
            resolve
        })
        .state('about', {
            url: "/about",
            templateUrl: "about-screen.html",
            resolve
        })
        .state('other', {
            url: "/other",
            templateUrl: "other-screen.html",
            //controller: "BootcampScreen",
            resolve
        });

    //use real urls instead of hashes
    $locationProvider.html5Mode(true);
});