import axios from 'axios';

export default async () => {
  let response;
  await axios
    .get(
      'https://yts.mx/api/v2/list_movies.json?genre=animation&limit=25&sort_by=download_count&minimum_rating=7',
    )
    .then((res) => {
      response = res;
    })
    .catch((err) => {
      response = err;
    });
  return response;
};
