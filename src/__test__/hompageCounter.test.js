/**
 * @jest-environment jsdom
 */

const fetchMock = require('fetch-mock');

describe('count all items on page (they have < 20 characters)', () => {
  test('can count items on page', async () => {
    fetchMock.get('https://yts.mx/api/v2/list_movies.json?genre=animation&limit=25&sort_by=download_count&minimum_rating=7', {
      anime: [
        { title: 'Moana' },
        { title: 'Mulan' },
        { title: 'The Lion King' },
        { title: 'Eternal Sunshine of the Spotless Mind' },
        { title: 'Pirates of the Caribbean: The Curse of the Black Pearl' },
      ].filter((item) => item.title.length < 20),
    });
    const response = await fetch('https://yts.mx/api/v2/list_movies.json?genre=animation&limit=25&sort_by=download_count&minimum_rating=7');
    const res = await response.json();
    expect(res.anime).toHaveLength(3);
  });
});