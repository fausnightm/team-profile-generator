const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('creates an Employee object', () => {
    const employee = new Employee('name','id','email');
  
    expect(employee.name).toBe('name');
    expect(employee.id).toEqual()
    expect(employee.email).toBe('email');
  });