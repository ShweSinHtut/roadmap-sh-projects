const buttons = document.querySelectorAll('header > button');
const contents = document.querySelectorAll('.content');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    removeActiveBtn();
    button.classList.add('active');

    const {target} = button.dataset;
    renderActiveContent(target);
  });
});

function removeActiveBtn() {
  buttons.forEach(button => button.classList.remove('active'));
}

function removeActiveContent() {
  contents.forEach(content => content.classList.remove('active'));
}

function renderActiveContent(id) {
  removeActiveContent();

  const content = document.getElementById(id);
  content.classList.add('active');
}