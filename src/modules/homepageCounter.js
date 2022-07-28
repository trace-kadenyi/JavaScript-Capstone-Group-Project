const counter = document.querySelector('.counter');
const countAnimations = (data) => {
  counter.innerHTML = `Animation Films (${data})`;
};

const countitems = async () => {
  await fetch('https://yts.mx/api/v2/list_movies.json?genre=animation&limit=25&sort_by=download_count&minimum_rating=7')
    .then((response) => response.json())
    .then((json) => countAnimations(json.data.movies.length))
    .catch((err) => console.error(err));
};

export default countitems;