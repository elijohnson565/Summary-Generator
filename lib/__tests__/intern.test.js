const Intern = require("../scripts/intern");

it('checks to see if the manager object is properly created', () => {
    const newIntern = new Intern("Elijah", 2, "elijohnson565@gmail.com", "Some College")
    
    expect(newIntern.name).toEqual(expect.any(String));
    expect(newIntern.id).toEqual(expect.any(Number));
    expect(newIntern.email).toEqual(expect.any(String));
    expect(newIntern.github).toEqual(expect.any(String));
});