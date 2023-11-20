
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

let operator = "";
let a = b = 0;

const operate = function(a, operator, b) {
    switch (operator){
        case "+": 
            return add(a,b);

        case "-":
            return subtract(a,b);
        
        case "*":
            return multiply(a,b);
        
        case "/":
            return divide(a,b);

        default:
            return NaN;
    }
}