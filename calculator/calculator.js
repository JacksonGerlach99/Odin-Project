let firstNum = "";
let lasNum = "";
let Op = "";
let doubleOp = false;
let dotCheck = false;

const backButton = document.getElementById('delete');
const clearButton = document.getElementById('clear');
const inputScreen = document.getElementById("current-input");
const currentOp = document.getElementById("display");
const numbers = document.querySelectorAll('.num');
const Operation = document.querySelectorAll('.operator');
const equalbutton = document.getElementById("equal");

numbers.forEach((element) => {
    element.addEventListener('click',() =>{
        if(inputScreen.innerHTML != 'ERROR'){
            appendNumbers(element);
        }
        else{
            clear();
            appendNumbers(element);
        }
    });

});

function appendNumbers(element){
    if(Op === ""){
        if (element.innerHTML != "."){
            firstNum = firstNum.concat(element.innerHTML);
            inputScreen.innerText = firstNum;
        }
        else{
            if (dotCheck == false){
                firstNum = firstNum.concat(element.innerHTML);
                inputScreen.innerText = firstNum;
                dotCheck = true;
            }
        }
    }
    else{
        if (element.innerHTML != "."){
            lasNum = lasNum.concat(element.innerHTML);
            inputScreen.innerText = lasNum
        }
        else{
            if (dotCheck == false){
                lasNum = lasNum.concat(element.innerHTML);
                inputScreen.innerText = lasNum
                dotCheck = true;
            }
        }
        
    }
}

Operation.forEach((element) => {
    element.addEventListener('click', () => {
        dotCheck = false;
        if(inputScreen.innerHTML == "ERROR"){
            clear();
        }
        if (doubleOp == false){
            Op = element.innerHTML;
            display.innerHTML = `${firstNum} ${Op}`;
            inputScreen.innerHTML = '';
            doubleOp = true;
        }
        else{
            let tempOp = element.innerHTML;
            operation();
            Op = tempOp;
            
        }

    });
    
});

equalbutton.addEventListener("click", () =>{
    if(Op != "" || lasNum != ""){
        operation();
        doubleOp = false;
    }
    
});

clearButton.addEventListener("click", () =>{
    clear();
});

backButton.addEventListener("click", () =>{
    if(Op === ""){
        firstNum = inputScreen.textContent.slice(0,[inputScreen.textContent.length-1]);
        inputScreen.textContent = firstNum;
    }
    else{
    lasNum = inputScreen.textContent.slice(0,[inputScreen.textContent.length-1]);
    inputScreen.textContent = lasNum;
    }
});


function clear(){
    firstNum ="";
    lasNum = "";
    Op = "";
    doubleOp = false;
    inputScreen.innerText = "";
    display.innerText = "";
}


function operation(){
    if (lasNum ===""){
        lasNum = "0";
    }
    if (firstNum === ""){
        firstNum = '0'
    }
    temp = `${firstNum} ${Op} ${lasNum} =`;
    display.innerText= temp;
    if (Op === "÷"){
        if(firstNum == 0 || lasNum == 0){
            inputScreen.innerText= "ERROR";
            return;
        }
        firstNum = firstNum/lasNum;
    }
    else if(Op === "+"){
        firstNum = parseInt(firstNum) + parseInt(lasNum);
    }
    else if(Op === "−"){
        firstNum = firstNum - lasNum;
    }
    else if (Op === "x"){
        firstNum = firstNum * lasNum;
    }
    inputScreen.innerText = firstNum; 
    Op = "";
    lasNum ="";
    temp="";
}

