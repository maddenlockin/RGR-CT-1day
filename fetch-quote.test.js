import fetchQuote from "./fetch-quote";

/* eslint-disable indent */
describe('fetchQuote', () => {
    it('returns a single quote with name text and image information', async () => {
        const actual = await fetchQuote();

        expect(actual).toEqual({
            character: expect.any(String),
            quote: expect.any(String),
            image: expect.any(String)
        });
    });
});
