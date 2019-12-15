const addButton = document.querySelector('.todo-list__add-button');
const toDoInput = document.querySelector('.todo-list__input')

const addNewTask = () => {
  let newTask = document.createElement('li');
  newTask.classList.add('todo-list__active-task');

  let inputValue = toDoInput.value;
  let newTaskContainer = document.createElement('div');
  newTaskContainer.classList.add('todo-list__task-container');
  newTask.appendChild(newTaskContainer);

  let newTaskValue = document.createElement('span');
  newTaskValue.innerText = inputValue;
  let completeButton = document.createElement('button');
  completeButton.innerHTML = '&#x2714;';
  completeButton.classList.add('todo-list__complete-button');
  
  newTaskContainer.appendChild(newTaskValue);
  newTaskContainer.appendChild(completeButton);

  let activeTasksList = document.querySelector('.todo-list__active-tasks');
  let firstChild = activeTasksList.firstChild;
  if (firstChild) {
    activeTasksList.insertBefore(newTask, firstChild);
  } else {
    activeTasksList.appendChild(newTask);
  }
  clearInputValue();
}

const clearInputValue = () => {
  toDoInput.value = '';
}

addButton.addEventListener('click', addNewTask);

