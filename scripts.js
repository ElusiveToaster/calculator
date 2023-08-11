const addBtn = document.querySelector('#add');
const subtractBtn = document.querySelector('#subtract');
const divideBtn = document.querySelector('#divide');
const multiplyBtn = document.querySelector('#multiply');
const operateBtn = document.querySelector('#operate');
const clearBtn = document.querySelector('#clear');
const decimalBtn = document.querySelector('#decimal')


function addition(firstNum, secondNum) {
    return (parseFloat(firstNum) + parseFloat(secondNum));

}

function subtract(firstNum, secondNum) {
    return (parseFloat(firstNum) - parseFloat(secondNum));

}

function divide(firstNum, secondNum) {
    return (parseFloat(firstNum) / parseFloat(secondNum));

}

function multiply(firstNum, secondNum) {
    return (parseFloat(firstNum) * parseFloat(secondNum));

}

let currentNumbers = {
    firstNum: 0,
    secondNum: 0,
    operator: null
}


const numButtons = document.querySelector('.numButtons');
const result = document.querySelector('.results h');

for (let i = 0; i < 10; i++) {
    const btn = document.createElement('button');

    btn.setAttribute('id', 'b' + i)
    btn.textContent = i;
    btn.addEventListener("click", () => {
        if (result.textContent == "0" || nextNum) {
            result.textContent = i;
            nextNum = false;
        } else {
            result.textContent += i;
        }
    })
    numButtons.prepend(btn);
    
}


decimalBtn.addEventListener("click", () => {
    if (result.textContent == 0 || nextNum) {
        result.textContent = "0.";
        nextNum = false;
    } else {
        result.textContent += '.';
    }
})

let nextNum = false;


addBtn.addEventListener("click", () => {
    if (currentNumbers.operator) {operate()}
    currentNumbers.firstNum = result.textContent;
    currentNumbers.operator = "add";
    nextNum = true;
})

subtractBtn.addEventListener("click", () => {
    if (currentNumbers.operator) {operate()}
    currentNumbers.firstNum = result.textContent;
    currentNumbers.operator = "subtract";
    nextNum = true;
})

divideBtn.addEventListener("click", () => {
    if (currentNumbers.operator) {operate()}
    currentNumbers.firstNum = result.textContent;
    currentNumbers.operator = "divide";
    nextNum = true;
})

multiplyBtn.addEventListener("click", () => {
    if (currentNumbers.operator) {operate()}
    currentNumbers.firstNum = result.textContent;
    currentNumbers.operator = "multiply";
    nextNum = true;
})

function operate() {
    currentNumbers.secondNum = result.textContent;
    if (currentNumbers.operator == "add") {
        result.textContent = addition(currentNumbers.firstNum, currentNumbers.secondNum).toFixed(2);
    } else if (currentNumbers.operator == "subtract") {
        result.textContent = subtract(currentNumbers.firstNum, currentNumbers.secondNum).toFixed(2);
    } else if (currentNumbers.operator == "divide") {
        result.textContent = divide(currentNumbers.firstNum, currentNumbers.secondNum).toFixed(2);
    } else if (currentNumbers.operator == "multiply") {
        result.textContent = multiply(currentNumbers.firstNum, currentNumbers.secondNum).toFixed(2);
    }

    if (result.textContent.toString().split(".")[1] == 0) {
        result.textContent = result.textContent.toString().split(".")[0];
    }

    currentNumbers.firstNum = 0;
    currentNumbers.secondNum = 0;
    currentNumbers.operator = null;
    nextNum = true;
    console.log('test');

}

function clear() {
    currentNumbers.firstNum = 0;
    currentNumbers.secondNum = 0;
    currentNumbers.operator = null;
    nextNum = false;

    result.textContent = 0;
}

operateBtn.addEventListener("click", operate);
clearBtn.addEventListener("click", clear);


