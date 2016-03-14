app.service('Users', ($state, $stateParams, $timeout) => {

    var users = [
        new User('John Sanders', 'Project Manager', 'jsanders@gmail.com'),
        new User('Billy Fisher', 'Java Developer', 'bfisher@gmail.com'),
        new User('Anna Arienne', 'Front-End Developer', 'aarienne@gmail.com'),
        new User('John Phillips', 'Product Analyst', 'jphillips@gmail.com'),
        new User('Arnold King', 'Java Developer', 'jphillips@gmail.com'),
        new User('Claire Fernandez', 'Oracle Ace', 'jphillips@gmail.com'),
        new User('Lennard Timon', 'Business Analyst', 'jphillips@gmail.com'),
        new User('Maximilian Montana', 'Javascript Developer', 'jphillips@gmail.com'),
        new User('Justin Tate', 'Java Developer', 'jphillips@gmail.com'),
        new User('Shirley Garland', 'Java Developer', 'jphillips@gmail.com'),
        new User('Khloe Radcliff', 'Scrum Master', 'jphillips@gmail.com')
    ];

    var addUser = (user) => {
        users.push(user);
    };

    var init = () => {
        console.log('users', users);
        users = _.sortBy(users, 'progress').reverse();
    };

    init();

    return {
        addUser,
        getUsers: () => users,
        getUserById: (id) => _.find(users, {id: id})
    }
});

class User {
    constructor(name, job, email, progress = _.random(0, 4)) {

        _.extend(this, {
            name, job, email, progress,
            id: _.uniqueId()
        });

    }
}

