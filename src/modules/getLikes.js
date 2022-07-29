import axios from 'axios';

const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
const appId = '69shtIm1HEQgP2zotUOM';

const getLikes = async () => {
  let response;
  await axios
    .get(`${baseUrl}/apps/${appId}/likes/`)
    .then((res) => {
      response = res;
    })
    .catch((err) => {
      response = err;
    });
  return response;
};

export default getLikes;