import postLike from './modules/postLikes.js';
import getLikes from './modules/getLikes.js';
import fetchAnimes from './modules/fetchData.js';
import './style.css';
import addFooter from './modules/add-footer.js';

// call the unordered list
const mainList = document.querySelector('.mainlist');
// populate the page
const populateAnimes = (animeList) => {
  const animeData = animeList.filter((item) => item.title.length < 20);
  animeData.forEach((anime) => {
    // list
    const oneList = document.createElement('li');
    oneList.className = 'onelist';
    mainList.appendChild(oneList);
    // image
    const animeImage = document.createElement('img');
    animeImage.className = 'animeImage';
    animeImage.src = `${anime.medium_cover_image}`;
    animeImage.alt = 'anime image';
    oneList.appendChild(animeImage);
    // div
    const div = document.createElement('div');
    div.className = 'divElement';
    oneList.appendChild(div);
    // title
    const animeTitle = document.createElement('h5');
    animeTitle.className = 'animetitle';
    animeTitle.innerHTML = `${anime.title}`;
    div.appendChild(animeTitle);
    // heart
    const heart = document.createElement('button');
    heart.className = 'heart';
    heart.id = `${anime.id}`;
    heart.innerHTML = `<i id=${anime.id} class="far fa-heart" id=${anime.id}></i><p><span> ${anime.likes} </span>Likes</p>`;
    div.appendChild(heart);
    // comment box
    const commentBox = document.createElement('button');
    commentBox.className = 'commentBox';
    commentBox.innerHTML = 'Comments';
    oneList.appendChild(commentBox);

    // event listener to like an item
    heart.addEventListener('click', (e) => {
      const { id } = e.target;
      postLike(id).then(() => {
        window.location.reload();
      });
    });
  });
};
// fetch and populate page
fetchAnimes().then((response) => {
  const restructuredAnimes = [];
  getLikes().then((res) => {
    const likes = res.data;
    const { movies } = response.data.data;
    movies.forEach((anime) => {
      const fm = likes.find((like) => like.item_id === String(anime.id));
      if (fm) {
        restructuredAnimes.push({
          ...anime,
          likes: fm.likes,
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