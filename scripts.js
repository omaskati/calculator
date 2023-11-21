
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

let operator = a = b = result = "";
let aIsActive = false;
let bIsActive = false;
let aIsSet = false;

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
    operator = a = b = result = "";
    aIsActive = false;
    bIsActive = false;
    aIsSet = false;
}

const btnClear = document.querySelector('#clear');
btnClear.onclick = clearDisplay;


const digitButtons = document.querySelectorAll("button.digit-btn");
for (let i=0; i< digitButtons.length; i++) {
    digitButtons[i].onclick = function (){

        if(!aIsActive && !bIsActive){ //starting fresh
            clearDisplay();
            aIsActive = true;
        }

        if(aIsActive){
            a += digitButtons[i].innerText;
        }
        else if(bIsActive){
            b += digitButtons[i].innerText;           
        }
        else;

        display.textContent += digitButtons[i].innerText;

    };
}

const opButtons = document.querySelectorAll("button.operator-btn");
for (let i=0; i< opButtons.length; i++) {
    
    opButtons[i].onclick = function (){

        if(!aIsActive && !bIsActive){
            if(result !==""){ //Accept current displayed result as 'a'
                a = result;
                aIsActive = true;
            }
         } 
        if(aIsActive){
            aIsSet = true;
            aIsActive = false;
            bIsActive = true;
            operator = opButtons[i].innerText;
            display.textContent += " " + operator + " ";
        }
        else if(bIsActive){
            if(b === "") return; //don't allow multiple operators in a row

            //else B Is set
            result = operate(+a, operator, +b);
            display.textContent = result;
            a = result;
            b = "";
            

            /*repeated code*/
            aIsSet = true;
            aIsActive = false;
            bIsActive = true;
            operator = opButtons[i].innerText;
            display.textContent += " " + operator + " ";
        }

    };
}

const btnEquals = document.querySelector("#equals");
btnEquals.onclick= function(){
    if(aIsSet && b !== ""){ //then we can proceed
        console.log(`trying ${a} ${operator} ${b} `);
        result = operate(+a, operator, +b);
        display.textContent = result;
        a = b = operator = "";

        aIsSet = false;
        aIsActive = false;
        bIsActive = false;
        display.textContent += " " + operator + " ";
    }
};


/*const operateAndUpdate = function(){
    if(a === "") return; //do nothing if display is empty

    if(!aIsActive && b !== ""){
        console.log(`trying ${a} ${operator} ${b} `);
        result = operate(+a, operator, +b);
        display.textContent = result;
        a = result;
        b = operator = "";
    }
    switchAB();
};
*/

/*btnEquals.onclick = function() {
    operateAndUpdate();
    equalsPressed = true;
};*/