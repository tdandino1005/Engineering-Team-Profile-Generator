const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {

        //Employee class methods
        super(name, id, email);
        this.github = github;
    }
// returning github from the input
    getGithub() {
        return this.github;
    }
// override employee role to engineer
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;