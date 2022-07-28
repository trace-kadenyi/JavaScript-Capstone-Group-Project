const counter = document.querySelector('.counter');
const countAnimations = (data) => {
  data = data.filter((item) => item.title.length < 20);
  counter.innerHTML = `Animation Films (${data.length})`;
};

const countitems = async () => {
  await fetch('https://yts.mx/api/v2/list_movies.json?genre=animation&limit=25&sort_by=download_count&minimum_rating=7')
    .then((response) => response.json())
    .then((json) => countAnimations(json.data.movies))
    .catch((err) => console.error(err));
};

export default countitems;