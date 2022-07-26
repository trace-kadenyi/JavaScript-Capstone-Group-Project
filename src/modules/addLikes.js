const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const animeID = 'Op7SOdAYfpP1vs20vayc';
const dataUrl = `${baseUrl}apps/${animeID}/likes/`;
// POST
const addLikes = async (item) => {
  const response = await fetch (dataUrl,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    },
  );
  const data = await response.json();
  return data;

};
// GET
const fetchLikes = async () => {
    await fetch(dataUrl, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
    }).then((response) => response.json())
}

export { addLikes, fetchLikes };
