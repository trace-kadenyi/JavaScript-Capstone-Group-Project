const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/69shtIm1HEQgP2zotUOM/likes/'

// POST
const addLikes = async (id) => {
  const response = await fetch (baseUrl,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify( {
        "item_id": id
      }),
    },
    console.log(id)
  );

  const data = await response.json();
  // console.log(data)
  

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
