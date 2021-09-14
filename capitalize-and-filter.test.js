import capitalizeAndFilter from "./capitalize-and-filter";

/* eslint-disable indent */
describe ('capitalizeAndFilter', () => {
    it('takes an array of strings capitalize all strings and filter out any string that starts with the letter F/f', () => {
        const arr = ['toe', 'foot', 'Funny bone', 'hand'];
        const actual = capitalizeAndFilter(arr);
        const expected = ['Toe', 'Hand'];

        expect(actual).toEqual(expected);
    });
});

