app.service('ID', () => {
    var images = ["", ""];

    var init = () => {
    };

    init();

    return {
        getImages: () => images,
        setImage: (index, image) => images[index] = image
    }
});
