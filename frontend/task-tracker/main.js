const tasksArray = JSON.parse(localStorage.getItem('tasks')) || 
[
  {
    name: 'Read the book',
    status: false,
  },
  {
    name: 'Do the housework',
    status: false,
  },
];
const enterBtn = document.querySelector('.enter-btn');
const inputElm = document.querySelector('.js-input');

renderTasks();

enterBtn.addEventListener('click', () => {
  const task = inputElm.value;

  addTask(task);
  saveToStorage();

  inputElm.value = '';
});

inputElm.addEventListener('keydown', (e) => {
  if(e.key === 'Enter') {
    const task = inputElm.value;

    addTask(task);
    saveToStorage();

    inputElm.value = '';
  }
});

function renderTasks() {
  let html = '';

  tasksArray.forEach((taskObj, index) => {
    html += `
     <div>
      <input class="js-checkbox" type="checkbox" name="" id=""
      ${taskObj.status ? 'checked' : ''}>
      <p class="taskObj-${index} ${taskObj.status ? 'completed' : ''}">${taskObj.name}</p>
      <i class="fa-solid fa-trash delete-btn"></i>
    </div>
    `;
  });

  document.querySelector('.tasks-container').innerHTML = html;

  document.querySelectorAll('.delete-btn')
    .forEach((button, index) => {
      button.addEventListener('click', () => {
        removeTask(index);
      })
    });

  document.querySelectorAll('.js-checkbox')
    .forEach((checkBox, index) => {
      checkBox.addEventListener('click', () => {
        if (tasksArray[index].status === false) {
          markCompleted(index);
        }
        else {
          unmarkCompleted(index);
        }
      });
    });
}

function markCompleted(index) {
  tasksArray[index].status = true;

  document.querySelector(`.taskObj-${index}`)
    .classList.add('completed');

  saveToStorage();
}

function unmarkCompleted(index) {
  tasksArray[index].status = false;

  document.querySelector(`.taskObj-${index}`)
    .classList.remove('completed');

  saveToStorage();
}

function removeTask(index) {
  tasksArray.splice(index, 1);
  saveToStorage();
  renderTasks();
}

function addTask(name) {
  tasksArray.unshift(
    {
      name,
      status: false,
    }
  );
  saveToStorage();
  renderTasks();
}

function saveToStorage() {
  localStorage.setItem('tasks', JSON.stringify(tasksArray));
}
