import postLike from './postLikes.js';

import popup from './commentPopup.js';
// call the unordered list
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
    div.appendChild(heart);

    const heartIcon = document.createElement('i');
    heartIcon.classList.add('fas', 'fa-heart');
    heartIcon.setAttribute('id', anime.id);
    heart.appendChild(heartIcon);

    const para = document.createElement('p');
    para.className = 'para';
    para.innerText = 'Likes ';
    heart.appendChild(para);

    const span = document.createElement('span');
    span.innerText = anime.likes;
    if (span.innerText > 0) {
      heartIcon.style.color = 'red';
    } else {
      heartIcon.style.color = 'black';
    }
    para.appendChild(span);

    // comment box
    const index = animeData.findIndex((x) => x.id === anime.id);
    // const indexId = index + 1;
    const commentBox = document.createElement('button');
    commentBox.id = `${index}`;
    commentBox.className = 'commentBox';
    commentBox.innerHTML = 'Comments';
    oneList.appendChild(commentBox);


    // update likes
    const updateLikes = () => {
      const currentLikes = span.innerText;
      span.innerText = currentLikes ? Number(currentLikes) + 1 : 1;
    };

    // event listener to like an item
    heart.addEventListener('click', async (e) => {
      heartIcon.style.color = 'red';
      const { id } = e.target;
      updateLikes();
      await postLike(id);
    });
  });
};
    commentBox.addEventListener('click', (e) => {
      e.preventDefault();
      const { id } = e.target;
      // console.log(indexId);
      popup(id, animeData);
    });
  });
};
export default populateAnimes;