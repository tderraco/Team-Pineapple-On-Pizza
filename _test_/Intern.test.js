const Intern = require('../lib/Intern.js')
const intern = new Intern('Tracy', 1234, 'ecert31@gmail.com', 'ucsd', 'Intern')
describe('test intern', () => {
    it ('name',() => {
        expect(intern.name).toBe('Tracy')

    })
    it ('id',() => {
        expect (intern.id).toBe(1234)
    })
    it ('email', () => {
        expect (intern.email).toBe('ecert31@gmail.com')

    })
    it ('school', () => {
        expect (intern.school).toBe('ucsd')
    })
});

describe('test to see if we can get name from getname()', () => {
    expect(intern.getName()).toBe('Tracy');
});

describe('test to see if we can get the employee id from the getId()', () => {
    expect(intern.getId()).toBe(1234);   
});

describe('test to see if we can get the school name', () => {
    expect(intern.getSchool()).toBe('ucsd');
});
describe('test to see if we can get Intern from the getRole()', () => {
    expect(intern.getRole()).toBe('Intern');
});


