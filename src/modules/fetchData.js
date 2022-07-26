import populateAnimes from './populatePage.js';

const fetchAnimes = async () => {
  await fetch('https://anime-facts-rest-api.herokuapp.com/api/v1')
    .then((response) => response.json())
    .then((json) => populateAnimes(json.data))
    .catch((err) => console.error(err));
};

export default fetchAnimes;