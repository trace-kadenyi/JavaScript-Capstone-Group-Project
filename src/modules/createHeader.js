import Icon from '../1.png';

const logo = document.querySelector('.logo');

const addLogo = () => {
  const image = document.createElement('img');
  image.className = 'logoimage';
  image.src = Icon;

  logo.appendChild(image);
};

export default addLogo;
