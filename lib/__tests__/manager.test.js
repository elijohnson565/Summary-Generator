const manager = require("../scripts/manager");

it('checks to see if the manager object is properly created', () => {
    const newManager = new manager("Elijah", 2, "elijohnson565", 9162223345)
    
    expect(newManager.name).toEqual(expect.any(String));
    expect(newManager.id).toEqual(expect.any(Number));
    expect(newManager.email).toEqual(expect.any(String));
    expect(newManager.number).toEqual(expect.any(Number));
});