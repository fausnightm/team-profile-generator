const Employee = require ("..lib/Employee.js");


test('creates an Employee object', () => {
    const employee = new Employee('name','id','email');
  
    expect(employee.name).toBe('name');
    expect(potion.id).toBe('id');
    expect(potion.email).toBe('email');
  });