// CONSTS
const btnOpen = document.getElementById('new_task');
const containerNewTask = document.getElementById('container_new_task');
const btnClose = document.getElementById('close');
const taskForm = document.getElementById('form');
const btnSave = document.getElementById('save');
const btnNewInput = document.getElementById('new-checkbox');
const btnNewNote = document.getElementById('new-note');
const containerInput = document.getElementById('container_input');
const containerTextArea = document.getElementById('container_textarea');

let contadorTextArea = 0;
let contadorInputs = 0;

function clearContador() {
    contadorTextArea = 0;
    contadorInputs = 0;
}


// FUNCTIONS POPUP

btnOpen.onclick = () => {
    containerNewTask.classList.add('show');
}

btnClose.onclick = () => {
    containerNewTask.classList.remove('show');
    deleteComponent(containerInput);
    deleteComponent(containerTextArea);
    clearContador();
}


function deleteComponent(componenet) {
    while (componenet.firstChild) {
        componenet.removeChild(componenet.firstChild);
    }
}


// ADD COMPONENT

btnNewInput.onclick = () => {
    if (contadorInputs != 5){

        const input = document.createElement('input');
    
        input.classList.add('style_input');
        input.setAttribute('type', 'text')
        input.setAttribute('id', 'newInput' + contadorInputs);
        input.setAttribute('placeholder', 'Introduce la tarea');
    
        containerInput.appendChild(input);
        contadorInputs++;
    }
}


btnNewNote.onclick = () => {
    
    if (contadorTextArea === 0){
        const textArea = document.createElement('textarea');

        textArea.classList.add('style_textarea');
        textArea.setAttribute('cols', '40');
        textArea.setAttribute('rows', '6');
        textArea.setAttribute('id', 'textarea');
        textArea.setAttribute('placeholder', 'Introduce la nota');
    
        containerTextArea.appendChild(textArea);
        contadorTextArea = 1;
        
    }
}


// ---------

btnSave.onclick = () => {
    console.log(taskForm['title'].value );
    for ( let i = 0; i < contadorInputs; i++){
        console.log(taskForm['newInput' + i].value);
    }
    console.log(taskForm['textarea'].value)
    taskForm.reset(); 
    clearContador();
    deleteComponent(containerInput);
    deleteComponent(containerTextArea);
}