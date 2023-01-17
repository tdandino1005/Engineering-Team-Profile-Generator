const Employee = require('../lib/Employee');

// creates employee object
test('creates an employee object', () => {
    const employee = new Employee('Elvis', 22, 'epresley@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// getName 
test('gets employee name', () => {
    const employee = new Employee('Elvis', 22, 'epresley@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

// getId() 
test('gets employee ID', () => {
    const employee = new Employee('Elvis', 22, 'epresley@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// getEmail()
test('gets employee email', () => {
    const employee = new Employee('Elvis', 22, 'epresley@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// gets role from getRole()
test('gets role of employee', () => {
    const employee = new Employee('Elvis', 22, 'epresley@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
}); 