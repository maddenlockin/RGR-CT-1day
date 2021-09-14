/* eslint-disable indent */

const capitalizeAndFilter = (arr) => {
    const newArr = [];
    for (const obj of arr) {
        if (obj.charAt(0) !== 'f' && obj.charAt(0) !== 'F') {
            newArr.push(obj.toUpperCase());
        }
    }
    return newArr;
};
export default capitalizeAndFilter;
