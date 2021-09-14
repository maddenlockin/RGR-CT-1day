import fetch from 'node-fetch';

/* eslint-disable indent */
const fetchQuote = async () => {
    const results = await fetch('https://futuramaapi.herokuapp.com/api/quotes');
    const body = await results.json();

    return {
        name: body[0].character,
        text: body[0].quote,
        image: body[0].image
    };
};

export default fetchQuote;