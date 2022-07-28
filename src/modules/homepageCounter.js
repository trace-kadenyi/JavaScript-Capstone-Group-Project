const counter = document.querySelector('.counter');

const countitems = async () => {
  await fetch('https://yts.mx/api/v2/list_movies.json?genre=animation&limit=25&sort_by=download_count&minimum_rating=7')
    .then((response) => response.json())
    .then((json) => {
      const movies = (json.data.movies).filter((item) => item.title.length < 20);
      const count = movies.length;
      counter.innerHTML = `Animation Films (${count})`;
    });
};
export default countitems;