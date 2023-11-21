
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
}

const btnClear = document.querySelector('#clear');
btnClear.onclick = clearDisplay;

const btnEquals = document.querySelector("#equals");
btnEquals.onclick = function(){
    let result = operate(+a, operator, +b);
    display.textContent = result;
};

const digitButtons = document.querySelectorAll("button.digit-btn");
for (let i=0; i< digitButtons.length; i++) {
    digitButtons[i].onclick = function (){
        display.textContent += digitButtons[i].innerText;
    };
}

const opButtons = document.querySelectorAll("button.operator-btn");
for (let i=0; i< opButtons.length; i++) {
    opButtons[i].onclick = function (){
        display.textContent += " " + opButtons[i].innerText + " ";
    };
}
