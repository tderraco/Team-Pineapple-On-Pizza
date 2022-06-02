//const { describe } = require('yargs');
const Manager = require('../lib/Manager.js')
const manager = new Manager('Tracy', 1234, 'ecert31@gmail.com', 1234, 'manager')
describe('test manager', () => {
    
    it ('name',() => {
        expect(manager.name).toBe('Tracy')

    })
    it ('id',() => {
        expect (manager.id).toBe(1234)
    })
    it ('email', () => {
        expect (manager.email).toBe('ecert31@gmail.com')

    })
    it ('officeNumber', () => {
        expect (manager.officeNumber).toBe(1234)
    })
});
describe('test to see if we can get name from getname()', () => {
    expect(manager.getName()).toBe('Tracy');
});

describe('test to see if we can get the employee id from the getId()', () => {
    expect(manager.getId()).toBe(1234);   
});

describe('test to see if we can get the email from the getEmail()', () => {
    expect(manager.getEmail()).toBe('ecert31@gmail.com');
});
describe('test to see if we can get the office number from getofficeNumber()', () => {
    expect(manager.getofficeNumber)
})
describe('test to see if we can get manager from the getRole()', () => {
    expect(manager.getRole()).toBe('Manager');
});


