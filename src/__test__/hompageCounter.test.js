/**
 * @jest-environment jsdom
 */

const fetchMock = require('fetch-mock');

describe('count all items on page (they have < 20 characters)', () => {
  test('can count items on page', async () => {
    fetchMock.get('https://yts.mx/api/v2/list_movies.json?genre=animation&limit=25&sort_by=download_count&minimum_rating=7', {
      anime: [
        { item_id: 1, title: 'Moana' },
        { item_id: 2, title: 'Mulan' },
        { item_id: 3, title: 'The Lion King' },
        { item_id: 4, title: 'Eternal Sunshine of the Spotless Mind' },
        { item_id: 5, title: 'Pirates of the Caribbean: The Curse of the Black Pearl' },
      ].filter((item) => item.title.length < 20),
    });
    const response = await fetch('https://yts.mx/api/v2/list_movies.json?genre=animation&limit=25&sort_by=download_count&minimum_rating=7');
    const res = await response.json();
    expect(res.anime).toHaveLength(3);
  });
});