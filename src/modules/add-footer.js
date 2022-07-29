const footer = document.querySelector('.footer');

const addFooter = () => {
  footer.innerHTML = `<p>Copyright &copy; ${new Date().getFullYear()}</p>`;
};

export default addFooter;