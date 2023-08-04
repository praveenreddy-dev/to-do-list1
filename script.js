document.addEventListener('DOMContentLoaded', () => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        const tasks = JSON.parse(savedTasks);
        tasks.forEach(task => {
            const ul1 = document.getElementById('ul1');
            const ulEl = createTaskElement(task.text, task.isChecked);
            ul1.appendChild(ulEl);
        });
    }
});
function createTaskElement(taskText, isChecked = false) {
    const liEl = document.createElement('li');

    const taskContent = document.createElement('span');
    taskContent.innerText = taskText;
    if (isChecked) {
        taskContent.classList.add('checked');
    }
    taskContent.addEventListener('click', () => {
        taskContent.classList.toggle('checked');
        saveTasksToLocalStorage();
    });
    liEl.appendChild(taskContent);

    const editBtn = document.createElement('button');
    editBtn.innerText = 'Edit';
    editBtn.classList.add('edit-btn'); // Add the "edit-btn" class
    editBtn.addEventListener('click', () => {
        const newText = prompt('Edit the task:', taskText);
        if (newText !== null && newText.trim() !== '') {
            taskContent.innerText = newText;
            saveTasksToLocalStorage();
        }
    });
    liEl.appendChild(editBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.classList.add('delete-btn'); // Add the "delete-btn" class
    deleteBtn.addEventListener('click', () => {
        liEl.remove();
        saveTasksToLocalStorage();
    });
    liEl.appendChild(deleteBtn);

    return liEl;
}

function myfunction() {
    const taskInputField = document.getElementById('inputText').value;
    if (taskInputField.trim() === '') {
        // Do not add empty tasks
        return;
    }

    const ul1 = document.getElementById('ul1');

    const ulEl = createTaskElement(taskInputField);

    ul1.appendChild(ulEl);
    saveTasksToLocalStorage();

    // Clear the input field after adding the task
    document.getElementById('inputText').value = '';
}

function saveTasksToLocalStorage() {
    const tasks = [];
    const taskElements = document.querySelectorAll('#ul1 li span');
    taskElements.forEach(span => {
        tasks.push({
            text: span.innerText,
            isChecked: span.classList.contains('checked')
        });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
