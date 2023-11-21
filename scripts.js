
const add = function(a,b) {
    return a + b;
};

const subtract = function(a,b) {
    return a-b
};

const multiply = function(a,b) {
    return a * b;
};

const divide = function (a,b){
    return a / b;
}

let operator = a = b = "";
let aIsActive = true;
let equalsPressed = false;

const switchAB = function(){
    aIsActive = !aIsActive;
}

const operate = function(a, operator, b) {
    switch (operator){
        case "+": 
            return add(a,b);

        case "-":
            return subtract(a,b);
        
        case "x":
            return multiply(a,b);
        
        case "/":
            return divide(a,b);

        default:
            return NaN;
    }
}

const display = document.querySelector("#display");

const clearDisplay = function(){
    display.textContent="";
    operator = a = b = "";
    aIsActive = true;
    equalsPressed=false;
}

const btnClear = document.querySelector('#clear');
btnClear.onclick = clearDisplay;

const btnEquals = document.querySelector("#equals");
const operateAndUpdate = function(){
    if(!aIsActive && b !== ""){
        console.log(`trying ${a} ${operator} ${b} `);
        let result = operate(+a, operator, +b);
        display.textContent = result;
        a = result;
        b = operator = "";
    }
    switchAB();
};
btnEquals.onclick = function() {
    operateAndUpdate();
    equalsPressed = true;
};


const digitButtons = document.querySelectorAll("button.digit-btn");
for (let i=0; i< digitButtons.length; i++) {
    digitButtons[i].onclick = function (){
        if(aIsActive){
            if(equalsPressed) {clearDisplay();}//reset everything
            
            a += digitButtons[i].innerText;
        }
        else b += digitButtons[i].innerText;
        display.textContent += digitButtons[i].innerText;
    };
}

const opButtons = document.querySelectorAll("button.operator-btn");
for (let i=0; i< opButtons.length; i++) {
    opButtons[i].onclick = function (){
        if(operator !== "") return;
        operator = opButtons[i].innerText;
        operateAndUpdate(); //won't do anything if aIsActive
        display.textContent += " " + operator + " ";
    };
}
