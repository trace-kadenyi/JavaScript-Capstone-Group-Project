const url3 = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/69shtIm1HEQgP2zotUOM/comments';
const getComments = async (ID, CONTAINER) => {
  const res = await fetch(`${url3}?item_id=${ID}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const commentCounter = (arr) => {
    const numComments = document.querySelector('.comment-counter');
    numComments.innerHTML = arr.length;
  };
  const data = await res.json();
  CONTAINER.innerHTML = '';
  data.forEach((comment) => {
    const eachComment = document.createElement('li');
    eachComment.classList.add('eachcomment');
    eachComment.innerHTML = `${comment.creation_date} -  ${comment.username} : ${comment.comment}`;
    CONTAINER.append(eachComment);
  });
  commentCounter(data);
  return data;
};
const addComments = async (COMMENTOBJ, ID, CONTAINER) => {
  const res = await fetch(url3, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: COMMENTOBJ.id,
      username: COMMENTOBJ.name,
      comment: COMMENTOBJ.comment,
    }),
  });
  getComments(ID, CONTAINER);
  return res;
};
export { addComments, getComments };