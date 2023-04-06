
const display = document.getElementById('display');

let expression = '';

function updateDisplay() {
    display.value = expression;
}

function buttonPressed(value) {
    expression += value;
    updateDisplay();
}


function clearDisplay() {
    expression = '';
    updateDisplay();
}

function deleteDisplay() {
    expression = expression.slice(0, -1);
    updateDisplay();
}

function calculate() {
    try {
        expression = eval(expression);
    } catch (error) {
        expression = 'Error';
    }
    updateDisplay();
}