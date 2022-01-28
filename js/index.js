import { open, close } from "./modelWin.js";

const btnOpen = document.getElementById('new_task');
const containerNewTask = document.getElementById('container_new_task');
const btnClose = document.getElementById('close');
const taskForm = document.getElementById('form');
const btnSave = document.getElementById('save');
const btnNewCheckbox = document.getElementById('new-checkbox');
const btnNewNote = document.getElementById('new-note');

open( btnOpen, containerNewTask );
close( btnClose, containerNewTask );

btnNewCheckbox.onclick = () => {
    alert('new checkbox');
}

btnNewNote.onclick = () => {
    alert('new note');
}



btnSave.onclick = () => {
    console.log(taskForm['title'].value);
    taskForm.reset();
}

