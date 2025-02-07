const selectBtn = document.querySelector('.select-btn');
const listElm = document.querySelector('.list');
const listItems = document.querySelectorAll('.list-item');
const downArrow = document.querySelector('.down-arrow');
const upArrow = document.querySelector('.up-arrow');

selectBtn.addEventListener('click', () => {
  listElm.classList.toggle('active');
  toggleArrow();
});

listItems.forEach((item) => {
  item.addEventListener('click', () => {
    updateSelection(item);
    closeList();
  });
});

function updateSelection(selectItem) {
  removePrevSelect();
  selectBtn.innerText = selectItem.innerText;
  selectItem.classList.toggle('chosen');
}

function removePrevSelect() {
  const prev = document.querySelector('.list-item.active');

  if(prev) {
    prev.classList.remove('active');
  }
}

function closeList() {
  listElm.classList.remove('active');
  upArrow.classList.remove('active');
  downArrow.classList.add('active');
}

function toggleArrow() {
  downArrow.classList.toggle('active');
  upArrow.classList.toggle('active');
}

