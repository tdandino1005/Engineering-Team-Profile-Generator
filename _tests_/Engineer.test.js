const Engineer = require('../lib/Engineer');

// creating engineer object  
test('creates an Engineer object', () => {
    const engineer = new Engineer('Elvis', 22, 'epresley@gmail.com', 'epresley22');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

// getGithub()
test('gets engineer github ', () => {
    const engineer = new Engineer('Elvis', 22, 'epresley@gmail', 'epresley22');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// getRole() 
test('gets role of employee', () => {
    const engineer = new Engineer('Elvis', 22, 'epresley@gmail', 'epresley22');

    expect(engineer.getRole()).toEqual("Engineer");
});