const Engineer = require('../lib/Engineer.js')
describe('test engineer', ()=>{
    const engineer = new Engineer('Tracy', 1234, 'ecert31@gmail.com')
    it ('name',() => {
        expect(engineer.name).toBe(Tracy)

    })
    it ('id',() => {
        expect (engineer.id).toBe(1234)
    })
    it ('email', () => {
        expect (engineer.email).toBe('ecert31@gmail.com')

    })
    it ('officeNumber', () => {
        expect (engineer.gitHub).toBe(1234)
    })
})