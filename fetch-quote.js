import fetch from 'node-fetch';

/* eslint-disable indent */
const fetchQuote = async () => {
    const results = await fetch('https://futuramaapi.herokuapp.com/api/quotes');
    const body = await results.json();

    return body[0];
};

export default fetchQuote;