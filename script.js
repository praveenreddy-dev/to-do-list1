
const inputField = document.querySelector('input');
const submitField = document.querySelector('button');
const taskContainerField = document.getElementById('taskContainer');

function createTaskElement(taskText) {
    const liEl = document.createElement('li');

  
    const taskContent = document.createElement('span');
    taskContent.innerText = taskText;
    liEl.appendChild(taskContent);

    const editBtn = document.createElement('button');
    editBtn.innerText = 'Edit';
    editBtn.addEventListener('click', () => {
        const newText = prompt('Edit the task:', taskText);
        if (newText !== null && newText.trim() !== '') {
            taskContent.innerText = newText;
        }
    });
    liEl.appendChild(editBtn);



    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.addEventListener('click', () => {
        liEl.remove();
    });
    liEl.appendChild(deleteBtn);

    return liEl;
}

function myfunction() {
    var taskInputField = document.getElementById('inputText').value;
    if (taskInputField.trim() === '') {
        // Do not add empty tasks
        return;
    }
    console.log(taskInputField);

    const ul1 = document.getElementById('ul1');

    const ulEl = createTaskElement(taskInputField);

    ul1.appendChild(ulEl);

    // Clear the input field after adding the task
    document.getElementById('inputText').value = '';
    // const ulEl = document.createElement('li');
ulEl.addEventListener('click',(e) =>{
    ulEl.classList.toggle('checked');

})}