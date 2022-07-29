/**
 * @jest-environment jsdom
 */

const fetchMock = require('fetch-mock');

describe('count all items on page (they have < 20 characters)', () => {
  test('can count items on page', async () => {
    fetchMock.mock('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/69shtIm1HEQgP2zotUOM/comments', {
      comments: [
        { item_id: 1, comment: 'I love this' },
        { item_id: 2, comment: 'I hate this' },
        { item_id: 3, comment: 'I enjoyed this movie' },
        { item_id: 4, comment: 'Scary movie' },
        { item_id: 5, comment: 'Fun movie' },
      ],
    });
    const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/69shtIm1HEQgP2zotUOM/comments');
    const res = await response.json();
    expect(res.comments).toHaveLength(5);
  });
});