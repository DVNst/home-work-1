let tasks = ['Задача-1', 'Задача-2', 'Задача-3'];

window.onload = () => {
  render();
};

function handleClickAdd() {
  const newTask = document.getElementById('new-task');

  if (newTask.value.trim()) {
    tasks.push(newTask.value.trim());
    newTask.value = '';
    render();
  }
}

function handleClickRemove(i) {
  tasks.splice(i, 1);
  render();
};

function render() {
  const tasksList = document.getElementById('tasks__list');
  tasksList.innerHTML = '';

  tasks.map((task, i) => {
    const li = document.createElement('li');
    const btn = document.createElement('button');

    btn.onclick = () => handleClickRemove(i);
    btn.className = "tasks__btn btn btn--remove";
    btn.appendChild(document.createTextNode('X'));

    li.className = "tasks__item";
    li.appendChild(document.createTextNode(task));
    li.appendChild(btn);

    tasksList.appendChild(li);
  });
}