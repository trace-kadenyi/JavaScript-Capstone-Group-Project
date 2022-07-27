import axios from 'axios';

const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
const appId = '69shtIm1HEQgP2zotUOM';
export default async (animeId) => {
  let response;
  await axios
    .post(
      `${baseUrl}/apps/${appId}/likes/`,
      {
        item_id: animeId,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    .then((res) => {
      response = res;
    })
    .catch((err) => {
      response = err;
    });
  return response;
};
