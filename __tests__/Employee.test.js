// const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee');


// Employee Object

test('creates an Employee object', () => {
    const employee = new Employee('billy', 1,'billyboy@gmail.com');
  
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
  });

  // Gets Name from getName() function
  test("Set name using constructor function", () => {
    const name = "billy";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
  });

  // Gets id from getId() function
  test("Set the user ID using constructor function", () => {
    const id = "1";
    const employee = new Employee("billy", id, "billyboy@gmail.com");
    expect(employee.id).toBe(id);
  });

  // Gets email from getEmail() function
  test("Set email using constructor function", () => {
    const email = "billyboy@gmail.com";
    const employee = new Employee("billy", 1, email);
    expect(employee.getEmail()).toBe(email);
  });

  // Gets role from getRole() function
  test("Set role using constructor function", () => {
    const role = "Employee";
    const employee = new Employee('billy', 1,'billyboy@gmail.com');
    expect(employee.getRole()).toBe(role);
  });
