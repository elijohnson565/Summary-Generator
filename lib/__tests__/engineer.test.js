const Engineer = require("../scripts/engineer");

it('checks to see if the manager object is properly created', () => {
    const newEngineer = new Engineer("Elijah", 2, "elijohnson565@gmail.com", "elijohnson565")
    
    expect(newEngineer.name).toEqual(expect.any(String));
    expect(newEngineer.id).toEqual(expect.any(Number));
    expect(newEngineer.email).toEqual(expect.any(String));
    expect(newEngineer.github).toEqual(expect.any(String));
});