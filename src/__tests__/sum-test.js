jest.dontMock('../sum'); // of jest.autoMockOff();

var sum = require('../sum')['default'];

describe('sum', function () {
    it('adds 1 + 2 to equal 3', function () {
        expect(sum(1, 2)).toBe(3);
    });
});