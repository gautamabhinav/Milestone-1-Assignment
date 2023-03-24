const addButton = document.getElementById('add-button');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

addButton.addEventListener('click', () => {
  const todoText = todoInput.value.trim();

  if (todoText) {
    const newTodo = document.createElement('li');
    newTodo.innerText = todoText;
    todoList.appendChild(newTodo);
    todoInput.value = '';
  }
});
