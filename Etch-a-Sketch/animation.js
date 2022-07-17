const container = document.querySelector("#container");

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
    e.target.style.backgroundColor = 'red';
    console.log(e);

}


makeRows(12);