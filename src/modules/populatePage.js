import { addLikes } from "./addLikes";
const mainList = document.querySelector('.mainlist');

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
    // title
    const animeTitle = document.createElement('h5');
    animeTitle.className = 'animetitle';
    animeTitle.innerHTML = `${anime.title}`;
    oneList.appendChild(animeTitle);
    // heart
    const heart = document.createElement('button');
    heart.className = 'heart';
    heart.id = `${anime.id}`;
    heart.innerHTML = `<i class="far fa-heart" id=${anime.id}></i><p><span id=${anime.id}> 0 </span>Likes</p>`;
    animeTitle.appendChild(heart);
    // comment box
    const commentBox = document.createElement('button');
    commentBox.className = 'commentBox';
    commentBox.innerHTML = 'Comments';
    oneList.appendChild(commentBox);
// console.log(heart.id)
    // event listener
    
    heart.addEventListener('click', (e) => {
      const id = e.target.id
      addLikes(id);

      // console.log(id)

      
    })
  });
};

export default populateAnimes;
