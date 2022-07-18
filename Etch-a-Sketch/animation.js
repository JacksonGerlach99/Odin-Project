const default_color = "#333333"
let current_color = default_color;
let toggle = false;


const container = document.querySelector("#container");
const colorPicker = document.getElementById('colorPicker');

document.body.onmousedown = () => (toggle = true);
document.body.onmouseup = () => (toggle = false);


function setCurrentColor(newColor) {
    current_color = newColor;
}


colorPicker.oninput = (e) => setCurrentColor(e.target.value);


function makeRows(size){
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(let i = 0; i < size * size; i++){
        const content = document.createElement('div');
        content.classList.add("filled");
        content.addEventListener('mouseover', changeColor);
        content.addEventListener('mousedown', changeColor);
        container.appendChild(content);
    }

}

function changeColor(e){
    if (e.type === 'mouseover' && toggle == false){
        return;
    } 
    e.target.style.backgroundColor = current_color;
    

}


makeRows(12);