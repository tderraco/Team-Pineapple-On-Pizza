const Intern = require('../lib/Intern.js')
describe('test intern', ()=>{
    const intern = new Intern('Tracy', 1234, 'ecert31@gmail.com')
    it ('name',() => {
        expect(intern.name).toBe(Tracy)

    })
    it ('id',() => {
        expect (intern.id).toBe(1234)
    })
    it ('email', () => {
        expect (intern.email).toBe('ecert31@gmail.com')

    })
    it ('officeNumber', () => {
        expect (intern.school).toBe(1234)
    })
})