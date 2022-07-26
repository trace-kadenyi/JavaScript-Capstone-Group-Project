const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const animeID = 'Op7SOdAYfpP1vs20vayc';
const dataUrl = `${baseUrl}apps/:${animeID}/likes/`;
// POST
const addLikes = async (item) => {
  await fetch(dataUrl, {
    method: 'POST',
    body: JSON.stringify({
      id: item,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => response.json());
};
// GET
const fetchLikes = async (likes, item) => {
    await fetch(dataUrl, {
        method: 'GET',
        body: JSON.parse({
            likes: likes,
            id: item
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
    }).then((response) => response.json())
}
