const Engineer = require('../lib/Engineer.js')
describe('test engineer', ()=>{
    const engineer = new Engineer('Tracy', 1234, 'ecert31@gmail.com', 'tderraco', 'engineer')
    it ('name',() => {
        expect(engineer.name).toBe(Tracy)

    })
    it ('id',() => {
        expect (engineer.id).toBe(1234)
    })
    it ('email', () => {
        expect (engineer.email).toBe('ecert31@gmail.com')

    })
    it ('github', () => {
        expect (engineer.gitHub).toBe('tderraco')
    })
    it ('getRole', () => {
        expect(engineer.getRole).toBe('Engineer')
    })
});

describe('test to see if we can get name from getname()', () => {
    expect(engineer.getName().toBe('Tracy'));
});

describe('test to see if we can get the employee id from the getId()', () => {
    expect(engineer.getId().tobe(1234));   
});

describe('test to see if we can get the office number from the getGitHub()', () => {
    expect(engineer.gitHub().toBe('tderraco'));
});
describe('test to see if we can get manager from the getRole()', () => {
    expect(engineer.getRole().toBe('engineer'));
});


