import getName from './get-name';

/* eslint-disable indent */
describe('getName', () => {
    it('returns only the name from a set of data', () => {
        const spot = { name: 'spot', age: 5, weight: '20 lbs' };
        const expected = 'spot';
        const actual = getName(spot);
        expected(actual).toEqual(expected);
    });
});
