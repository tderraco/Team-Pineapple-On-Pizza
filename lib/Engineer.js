const Employee = require('./Employee.js')

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github;
    }
    
    getGithub() {
        this.github
    }
    getRole() {
        return this.gitHub
    }
}
module.exports = Engineer
