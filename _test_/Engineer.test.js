const Engineer = require('../lib/Engineer.js')
const engineer = new Engineer('Tracy', 1234, 'ecert31@gmail.com', 'tderraco', 'engineer')
describe('test engineer', ()=>{
    
    it ('name',() => {
        expect(engineer.name).toBe('Tracy')

    })
    it ('id',() => {
        expect(engineer.id).toBe(1234)
    })
    it ('email', () => {
        expect(engineer.email).toBe('ecert31@gmail.com')

    })
    it ('github', () => {
        expect(engineer.getGithub()).toBe('tderraco')
    })
    it ('getRole', () => {
        expect(engineer.getRole()).toBe('Engineer')
    })
});

describe('test to see if we can get name from getname()', () => {
    expect(engineer.getName()).toBe('Tracy');
});

describe('test to see if we can get the employee id from the getId()', () => {
    expect(engineer.getId()).toBe(1234);   
});

describe('test to see if we can get the user name from the getGithub()', () => {
    expect(engineer.getGithub()).toBe('tderraco');
});
 describe('test to see if we can get engineer from the getRole()', () => {
     expect(engineer.getRole()).toBe('Engineer');
 });


