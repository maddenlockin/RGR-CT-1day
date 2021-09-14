/* eslint-disable indent */

const capitalizeAndFilter = (arr) => {
    const upArr = arr.map(string => string.toUpperCase());
    const newArr = upArr.filter(string => string.charAt(0) !== 'F');
    return newArr;
};
export default capitalizeAndFilter;

//const newArr = arr.capitalizeAndFilter((string) => !string.startsWith('f'));
