const Spiderman = require('./../app/spiderman.js')

describe('Unit Tests for Spiderman class', () => {
    test('1) Create an spiderman object', () => {
        const andrewGarfield = new Spiderman('Spiderman Sony', 31, 'Andrew Garfield', 3, 'Sony');

        expect(andrewGarfield.name).toBe('Spiderman Sony');
        expect(andrewGarfield.age).toBe(31);
        expect(andrewGarfield.actor).toBe('Andrew Garfield');
        expect(andrewGarfield.movies).toBe(3);
        expect(andrewGarfield.studio).toBe('Sony');
    });
});