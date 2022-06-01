const Manager = require('../lib/Manger.js')
describe('test manager', ()=>{
    const manager = new Manager('Tracy', 1234, 'ecert31@gmail.com')
    it ('name',() => {
        expect(manager.name).toBe(Tracy)

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
})