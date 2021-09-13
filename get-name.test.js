import getName from './get-name';

/* eslint-disable indent */
describe('getName', () => {
    it('returns only the name from a set of data', () => {
        const spot = { name: 'spot', age: 5, weight: '20 lbs' };
        const actual = getName(spot);
        const expected = 'spot';
        
        expect(actual).toEqual(expected);
    });
});
