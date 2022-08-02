let firstNum = "";
let lasNum = "";
let Op = "";
let doubleOp = false;


const inputScreen = document.getElementById("current-input");
const currentOp = document.getElementById("display");
const numbers = document.querySelectorAll('.num');
const Operation = document.querySelectorAll('.operator');
const equalbutton = document.getElementById("equal");


//getting first num and writing to input screen
numbers.forEach((element) => {
    element.addEventListener('click', () =>{
        console.log(firstNum);
        if(Op === "" && firstNum === ""){
            firstNum = firstNum.concat(element.innerHTML);
            inputScreen.innerText = firstNum;
        }
        else{
            lasNum = lasNum.concat(element.innerHTML);
            inputScreen.innerText = lasNum
        }

    });

});

Operation.forEach((element) => {
    element.addEventListener('click', () => {
        if (doubleOp == false){
            Op = element.innerHTML;
            display.innerHTML = `${firstNum} ${Op}`;
            inputScreen.innerHTML = '';
            doubleOp = true;
        }
        else{
            operation();
        }

    });
    
});

equalbutton.addEventListener("click", () =>{
    operation();
});


function operation(){
    temp = `${firstNum} ${Op} ${lasNum} =`;
    display.innerText= temp;
    if (Op === "÷"){
        firstNum = firstNum/lasNum;
    }
    else if(Op === "+"){
        firstNum = firstNum + lasNum;
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
    doubleOp = false;
}

