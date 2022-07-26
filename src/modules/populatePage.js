import { addLikes } from "./addLikes";
const mainList = document.querySelector('.mainlist');

const populateAnimes = (animeList) => {
  const animeData = animeList.filter((item) => item.anime_id !== 4);
  animeData.forEach((anime) => {
    // list
    const oneList = document.createElement('li');
    oneList.className = 'onelist';
    mainList.appendChild(oneList);
    // image
    const animeImage = document.createElement('img');
    animeImage.className = 'animeImage';
    animeImage.src = `${anime.anime_img}`;
    animeImage.alt = 'anime image';
    oneList.appendChild(animeImage);
    // title
    const animeTitle = document.createElement('h5');
    animeTitle.className = 'animetitle';
    animeTitle.innerHTML = `${anime.anime_name}`;
    oneList.appendChild(animeTitle);
    // heart
    const heart = document.createElement('button');
    heart.className = 'heart';
    heart.id = `${anime.anime_id}`;
    heart.innerHTML = `<i class="far fa-heart" id=${anime.anime_id}></i>`;
    animeTitle.appendChild(heart);
    // comment box
    const commentBox = document.createElement('button');
    commentBox.className = 'commentBox';
    commentBox.innerHTML = 'Comments';
    oneList.appendChild(commentBox);

    // event listener
    heart.addEventListener('click', (e) => {
      console.log(addLikes(e.target.id));
      
    })
  });
};

export default populateAnimes;
