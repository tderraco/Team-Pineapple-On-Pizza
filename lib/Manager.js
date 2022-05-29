const Employee = require('./Employee.js')//always giving info to the childre

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        //piggybacks the parent constructor
        this.officeNumber = officeNumber;

    }
getofficeNumber() {
    this.officeNumber
}


getRole() {
    return 'Manager';
}
}

module.exports = Manager