const Intern = require('../src/Intern');

// creating intern object  
test('creates an Intern object', () => {
    const intern = new Intern('Elvis', 22, 'epresley@gmail', 'UNLV');
    
    expect(intern.school) .toEqual(expect.any(String));
});

// getSchool()
test('gets employee school', () => {
    const intern = new Intern('Elvis', 22, 'epresleyw@gmail', 'UNLV');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// getRole()
test('gets role of employee', () => {
    const intern = new Intern('Elvis', 22, 'epresley@gmail.com', 'UNLV');

    expect(intern.getRole()).toEqual("Intern");
}); 