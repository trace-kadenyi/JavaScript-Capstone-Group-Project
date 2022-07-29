const commentCounter = (arr) => {
  const numComments = document.querySelector('.comment-counter');
  numComments.innerHTML = arr.length;
};

export default commentCounter;