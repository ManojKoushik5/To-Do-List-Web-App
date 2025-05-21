function addTodo() {
    const input = document.getElementById('todoInput');
    const task = input.value.trim();
    if (task === '') return;

    const list = document.getElementById('todoList');
    const li = document.createElement('li');
    li.textContent = task;
    li.onclick = () => li.classList.toggle('completed');

    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.style.marginLeft = '10px';
    delBtn.onclick = (e) => {
        e.stopPropagation();
        list.removeChild(li);
    };

    li.appendChild(delBtn);
    list.appendChild(li);
    input.value = '';
}
