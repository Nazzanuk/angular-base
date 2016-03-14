app.component('verifyIdItem', {
    templateUrl: 'verify-id.html',
    controllerAs: 'verify',
    bindings: {
        img: '@',
        heading: '@',
        subheading: '@'
    },
    controller: function (Jobs, $scope, ID) {

        var changePic = (e, index) => {
            var files = e.target.files, fileReader = new FileReader();
            fileReader.onload = (e) => $scope.$apply(() => ID.setImage(index, e.target.result));
            fileReader.readAsDataURL(files[0]);
        };

        var init = () => {
        };

        init();

        _.extend(this, {
            getImages: ID.getImages,
            changeProfile: (e) => changePic(e, 0),
            changeID: (e) => changePic(e, 1)
        });
    }
});
app.component('fakeLoader', {
    controller: function ($timeout) {

        var init = () => {
            $timeout(() => {
                $('.fake-loader-1').hide();
                $('.fake-loader-2').show();
            }, 5000);
        };

        init();

        _.extend(this, {});
    }
});


