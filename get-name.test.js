import getName from './get-name';

/* eslint-disable indent */
describe('getName', () => {
    it('returns only the name from a set of data', () => {
        const spot = { name: 'spot', age: 5, weight: '20 lbs' };
        const actual = getName(spot);
        const expected = 'spot';
        
        expect(actual).toEqual(expected);
    });
    
    it('returns on the name from the set of data', () => {
        const character = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' };
        const actual = getName(character);
        const expected = 'Aang';

        expect(actual).toEqual(expected);
    });

});
