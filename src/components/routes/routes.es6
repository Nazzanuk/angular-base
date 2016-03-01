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
        .state('splash', {
            url: "/",
            templateUrl: "splash-screen.html",
            resolve
        })
        .state('home', {
            url: "/home",
            templateUrl: "home-screen.html",
            controller:'HomeScreen',
            resolve
        })
        .state('job', {
            url: "/job/:id",
            templateUrl: "job-screen.html",
            controller:'JobScreen',
            resolve
        })
        .state('verify', {
            url: "/verify/:id",
            templateUrl: "verify-screen.html",
            controller:'VerifyScreen',
            resolve
        });

    //use real urls instead of hashes
    //$locationProvider.html5Mode(true);
});