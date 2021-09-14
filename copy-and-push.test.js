/* eslint-disable indent */

import copyAndPush from './copy-and-push';

describe('copyAndPush', () => {
    it('returns a new array with all the items in the original array and a new item pushed to the end', () => {
        const numbers = [1, 2, 3];
        const actual = copyAndPush(numbers, 4);
        const expected = [1, 2, 3, 4];

        expect(actual).toEqual(expected);

    });
    it('returns a new array with all the items in the original array and a new item pushed to the end', () => {
        const numbers = [1, 2, 3, 4];
        const actual = copyAndPush(numbers, 0);
        const expected = [1, 2, 3, 4, 0];

        expect(actual).toEqual(expected);

    });
});
