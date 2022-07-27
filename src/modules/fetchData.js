import populateAnimes from './populatePage.js';

const fetchAnimes = async () => {
  await fetch('https://yts.mx/api/v2/list_movies.json?genre=animation&limit=25&sort_by=download_count&minimum_rating=7')
    .then((response) => response.json())
    .then((json) => populateAnimes(json.data.movies))
    .catch((err) => console.error(err));
};

export default fetchAnimes;