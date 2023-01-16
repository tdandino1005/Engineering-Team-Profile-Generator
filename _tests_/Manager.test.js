const Manager = require('../src/Manager');

// creating manager object  
test('creates an Manager object', () => {
    const manager = new Manager('Elvis', 22, 'epresley@gmail', 1);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// getRole()
test('gets role of employee', () => {
    const manager = new Manager('Elvis', 22, 'epresley@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 