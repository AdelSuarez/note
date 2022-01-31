
export function open (btn, container){
    btn.onclick = () => {
        container.classList.add('show');
    }
}

export function close (btn, container){
    btn.onclick = () => {
        container.classList.remove('show');
    }
}