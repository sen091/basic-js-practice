import scopes from '../src/basics.js';

test('finding scope', () => {
expect(scopes(10)).toBe([10,20,10]);
});