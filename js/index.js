// CONSTS
const btnOpen = document.getElementById('new_task');
const containerNewTask = document.getElementById('container_new_task');
const btnClose = document.getElementById('close');
const taskForm = document.getElementById('form');
const btnSave = document.getElementById('save');
const btnNewCheckbox = document.getElementById('new-checkbox');
const btnNewNote = document.getElementById('new-note');
const containerInput = document.getElementById('container_input');
const containerTextArea = document.getElementById('container_textarea');

let contadorTextArea = 0;


// FUNCTIONS POPUP

btnOpen.onclick = () => {
    containerNewTask.classList.add('show');
}

btnClose.onclick = () => {
    containerNewTask.classList.remove('show');
    deleteComponent(containerInput);
    deleteComponent(containerTextArea);
    contadorTextArea = 0;
}


function deleteComponent(componenet) {
    while (componenet.firstChild) {
        componenet.removeChild(componenet.firstChild);
    }
}


// ADD COMPONENT

btnNewCheckbox.onclick = () => {
    const input = document.createElement('input');

    input.classList.add('style_input');

    containerInput.appendChild(input);
}


btnNewNote.onclick = () => {
    
    if (contadorTextArea === 0){
        const textArea = document.createElement('textarea');

        textArea.classList.add('style_textarea');
        textArea.setAttribute('cols', '40');
        textArea.setAttribute('rows', '6');
    
        containerTextArea.appendChild(textArea);
        contadorTextArea = 1;
        
    }
}


btnSave.onclick = () => {
    alert(taskForm['title'].value);
    taskForm.reset();
    contadorTextArea = 0;

}