let firstNum = "";
let lasNum = "";
let Op = "";
let doubleOp = false;
let dotCheck = false;
let tempOp ='';

const backButton = document.getElementById('delete');
const clearButton = document.getElementById('clear');
const inputScreen = document.getElementById("current-input");
const currentOp = document.getElementById("display");
const numbers = document.querySelectorAll('.num');
const Operation = document.querySelectorAll('.operator');
const equalbutton = document.getElementById("equal");
window.addEventListener('keydown', keyboardFunc);

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
            tempOp = element.innerHTML;
            operation();
            Op = tempOp;
            
        }

    });
    
});


equalbutton.addEventListener("click", equalEnd);

function equalEnd(){
    if(Op != "" || lasNum != ""){
        operation();
        doubleOp = false;
    }
}

clearButton.addEventListener("click", () =>{
    clear();
});

backButton.addEventListener("click", () =>{
    backSpace();
});

function backSpace(){
    if(Op === ""){
        firstNum = inputScreen.textContent.slice(0,[inputScreen.textContent.length-1]);
        inputScreen.textContent = firstNum;
    }
    else{
    lasNum = inputScreen.textContent.slice(0,[inputScreen.textContent.length-1]);
    inputScreen.textContent = lasNum;
    }
}




function clear(){
    firstNum ="";
    lasNum = "";
    Op = "";
    doubleOp = false;
    dotCheck = false;
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
    firstNum = Math.round(parseFloat(firstNum) * 100) / 100
    firstNum = firstNum.toString();
    inputScreen.innerText = firstNum; 
    Op = "";
    lasNum ="";
    temp="";
}

function keyboardFunc(e){
    if (!isNaN(e.key) || e.key == "."){
        if(Op === ""){
            if (e.key != "."){
                firstNum = firstNum.concat(e.key);
                inputScreen.innerText = firstNum;
            }
            else{
                if (dotCheck == false){
                    firstNum = firstNum.concat(e.key);
                    inputScreen.innerText = firstNum;
                    dotCheck = true;
                }
            }
        }
        else{
            if (e.key != "."){
                lasNum = lasNum.concat(e.key);
                inputScreen.innerText = lasNum
            }
            else{
                if (dotCheck == false){
                    lasNum = lasNum.concat(e.key);
                    inputScreen.innerText = lasNum
                    dotCheck = true;
                }
            }
        }
    }
    else if (e.key === 'Backspace'){
        backSpace();
    }
    else if (e.key === 'Enter'){
        equalEnd();
    }
    else if (e.key === 'Escape'){
        clear();
    }
    else if (e.key == '+' || e.key == '-'|| e.key == "x" || e.key == '/' || e.key == '*'){
        dotCheck = false;
        if(inputScreen.innerHTML == "ERROR"){
            clear();
        }
        if (doubleOp == false){
            Op = e.key;
            if(Op == '/'){
                Op = '÷';
            }
            else if (Op == '*'){
                Op = 'x'
            }
            else if (Op == '-'){
                Op = '−'
            }
            display.innerHTML = `${firstNum} ${Op}`;
            inputScreen.innerHTML = '';
            doubleOp = true;
        }
        else{
            tempOp = e.key;
            if(tempOp  == '/'){
                tempOp  = '÷';
            }
            else if (tempOp  == '*'){
                tempOp  = 'x'
            }
            else if (tempOp  == '-'){
                tempOp  = '−'
            }
            operation();
            Op = tempOp;  
        }
    }
}