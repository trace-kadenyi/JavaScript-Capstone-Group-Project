import Icon from '../1.png';
import Icon2 from '../8.png';

const logo = document.querySelector('.logo');
const logo2 = document.querySelector('.logo2');

const addLogo = () => {
  const image = document.createElement('img');
  image.className = 'logoimage';
  image.src = Icon;

  const image1 = document.createElement('img');
  image1.className = 'logoimage';
  image1.src = Icon2;

  logo.appendChild(image);
  logo2.appendChild(image1);
};

export default addLogo;
