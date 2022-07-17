const default_color = "#333333"
let current_color = default_color;

const container = document.querySelector("#container");
const colorButton = document.getElementById("colorPicker");


function setColor(newColor){
    current_color = newColor;
}

colorButton.addEventListener('click', () => {
    const colorValue = document.getElementById("colorPicker").value;
    console.log(colorValue);
    setColor(colorValue);
    console.log(colorValue);

})



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
    e.target.style.backgroundColor = current_color;
    

}


makeRows(12);