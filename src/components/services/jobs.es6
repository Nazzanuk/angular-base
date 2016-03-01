app.service('Jobs', ($state, $stateParams, $timeout) => {

    var users = [
        new Job('Java Developer', 'Sky', '£30,000', 'jobs@sky.com'),
        new Job('Senior Hybris Developer', 'Vodafone', '', 'bfisher@gmail.com'),
        new Job('Full Stack Dev', 'Vodafone', '', 'aarienne@gmail.com'),
        new Job('J2EE Developer', 'Vodafone', '', 'jphillips@gmail.com'),
        new Job('Mid Java Dev', 'Whitbread', '', 'jphillips@gmail.com'),
        new Job('Senior Java Consultant', 'Vodafone', '', 'jphillips@gmail.com')
    ];

    var init = () => {
        console.log('users', users);
    };

    init();

    return {
        getJobs: () => users,
        getJobById: (id) => _.find(users, {id: id})
    }
});

class Job {
    constructor(role, company, salary, email) {
        this.id = _.uniqueId();
        this.role = role;
        this.company = company;
        this.salary = salary;
        this.email = email;
    }
}

