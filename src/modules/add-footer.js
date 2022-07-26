const footer = document.querySelector('.footer');

const addFooter = () => {
  const footerContent = document.createElement('p');
  footerContent.textContent = `Copyright &copy; ${new Date().getFullYear()}`;

  footer.appendChild(footerContent);
};

export default addFooter;