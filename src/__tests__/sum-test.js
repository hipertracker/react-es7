jest.dontMock('../sum'); // or jest.autoMockOff();

// cannot use es6 modules because
// jest.dontMock & jest,autoMockOff()
// do not understand ES6 modules
const sum = require('../sum');

describe('sum', function () {
    it('adds 1 + 2 to equal 3', function () {
        expect(sum(1, 2)).toBe(3);
    });
});
