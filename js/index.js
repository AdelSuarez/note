const btnOpen = document.getElementById('new_task');
const containerNewTask = document.getElementById('container_new_task');
const btnClose = document.getElementById('close');
const taskForm = document.getElementById('form')
const btnSave = document.getElementById('save')


btnOpen.onclick = () => {
    containerNewTask.classList.add('show');
}

btnClose.onclick = () => {
    containerNewTask.classList.remove('show');
}

btnSave.onclick = () =>{
    console.log(taskForm['title'].value);
    taskForm.reset();
}

