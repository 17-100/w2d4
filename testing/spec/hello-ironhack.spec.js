// TODO
describe('Hello ironhack function', function () {
    it('Should be a function', function () {
        expect(typeof helloIronhack).toBe('function');
    });
    it('Should return greeting', function () {
        expect(helloIronhack()).toEqual('hello ironhack');
    })
})

