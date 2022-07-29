import getLikes from './modules/getLikes.js';
import fetchAnimes from './modules/fetchData.js';
import addLogo from './modules/createHeader.js';
import countitems from './modules/homepageCounter.js';
import './style.css';
import addFooter from './modules/add-footer.js';
import populateAnimes from './modules/populatePage.js';

addLogo();
countitems();

// fetch and populate page
fetchAnimes().then((response) => {
  const restructuredAnimes = [];
  getLikes().then((res) => {
    const likes = res.data;
    const { movies } = response.data.data;
    movies.forEach((anime) => {
      const likesFound = likes.find((like) => like.item_id === String(anime.id));
      if (likesFound) {
        restructuredAnimes.push({
          ...anime,
          likes: likesFound.likes,
        });
      } else {
        restructuredAnimes.push({
          ...anime,
          likes: 0,
        });
      }
    });
    populateAnimes(restructuredAnimes);
  });
}).catch(() => {
});
// footer
addFooter();