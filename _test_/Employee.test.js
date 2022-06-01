const Employee = require('../lib/Employee.js')
describe('test employee', ()=>{
    const employee = new Employee('Tracy', 1234, 'ecert31@gmail.com')
    it ('name',() => {
        expect(employee.name).toBe(Tracy)

    })
    it ('id',() => {
        expect (employee.id).toBe(1234)
    })
    it ('email', () => {
        expect (employee.email).toBe('ecert31@gmail.com')

    })
});
