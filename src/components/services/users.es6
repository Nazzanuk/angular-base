app.service('Users', ($state, $stateParams, $timeout) => {

    var users = [
        new User('John Sanders', 'Project Manager', 'jsanders@gmail.com'),
        new User('Billy Fisher', 'Java Developer', 'bfisher@gmail.com'),
        new User('Anna Arienne', 'Front-End Developer', 'aarienne@gmail.com'),
        new User('John Phillips', 'Product Analyst', 'jphillips@gmail.com')
    ];

    var init = () => {
        console.log('users', users);
    };

    init();

    return {
        getUsers: () => users,
        getUserById: (id) => _.find(users, {id:id})
    }
});

class User {
    constructor(name, job, email) {
        this.id = _.uniqueId();
        this.name = name;
        this.job = job;
        this.email = email;
    }
}

