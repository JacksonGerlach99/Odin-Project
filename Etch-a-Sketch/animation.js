const default_color = "#333333"
let current_size = 16;
let current_color = default_color;
let toggle = false;
let mode = 'color';
gridToggle = true;

const container = document.querySelector("#container");
const colorPicker = document.getElementById('colorPicker');
const colorButton = document.getElementById('color-button');
const rainbow = document.getElementById("rainbow-button");
const eraser = document.getElementById("eraser-button");
const clear = document.getElementById("clear-button");
const sliderCount = document.getElementById("sliderNum");
const slider = document.getElementById("slider");
const grid = document.getElementById("grid-button");

colorButton.classList.add("active");
grid.classList.add('active');


document.body.onmousedown = () => (toggle = true);
document.body.onmouseup = () => (toggle = false);


function setCurrentColor(newColor) {
    current_color = newColor;
}


colorPicker.oninput = (e) => setCurrentColor(e.target.value);

function removePrevious(){
    if (mode == "color"){
        colorButton.classList.remove('active');
    }
    else if( mode == "rainbow"){
        rainbow.classList.remove("active");
    }
    else if(mode == 'eraser'){
        eraser.classList.remove("active");
    }
    else if(mode == "clear"){
        clear.classList.remove("active");
    }
}



rainbow.addEventListener("click", () =>{
    rainbow.classList.add("active");
    if (mode != 'rainbow'){
        removePrevious();
    }
    mode = 'rainbow';
});

colorButton.addEventListener("click", () =>{
    colorButton.classList.add("active");
    if (mode != 'color'){
        removePrevious();
    }
    mode = 'color';
});

eraser.addEventListener("click", () =>{
    eraser.classList.add("active");
    if (mode != 'eraser'){
        removePrevious();
    }
    mode = 'eraser';
});





//come back to so it's not like other buttons
clear.addEventListener("click", () =>{
    container.innerHTML = ''
    makeRows(current_size);
});



slider.addEventListener('click', (e) => {
    let size = e.target.value;
    sliderCount.textContent = `${size} x ${size}`;
    container.innerHTML= '';
    current_size = size;
    makeRows(current_size);
})




function makeRows(size){
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(let i = 0; i < size * size; i++){
        const content = document.createElement('div');
        content.classList.add("filled");
        content.classList.add("target")
        content.addEventListener('mouseover', changeColor);
        content.addEventListener('mousedown', changeColor);
        container.appendChild(content);
    }
    grid.classList.add('active');

}

function changeColor(e){
    if (e.type === 'mouseover' && toggle == false){
        return;
    }  
    if(mode == 'color'){
        e.target.style.backgroundColor = current_color;
    }
    else if (mode == 'rainbow'){
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        randomColor = "#"+randomColor;
        e.target.style.backgroundColor = randomColor;
    }
    else if (mode == 'eraser'){
        e.target.style.backgroundColor = '#ffffff';        

    }
    

}



makeRows(current_size);

grid.addEventListener('click', () => {
    if(gridToggle == true){
    const boxes = document.querySelectorAll(".filled");
    boxes.forEach(filled => filled.classList.remove("filled"));
    grid.classList.remove('active');
    gridToggle = false;
    }
    else if (gridToggle == false){
        const boxes = document.querySelectorAll(".target");
        boxes.forEach(target => target.classList.add("filled"));
        gridToggle = true;
        grid.classList.add('active');
    }

});
