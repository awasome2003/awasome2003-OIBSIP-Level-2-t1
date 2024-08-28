const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let operator = '';
let previousInput = '';
let memory = 0;  // Memory variable

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C') {
            currentInput = '';
            previousInput = '';
            operator = '';
            display.textContent = '';
        } else if (value === '=') {
            if (currentInput && previousInput && operator) {
                currentInput = eval(`${previousInput} ${operator} ${currentInput}`);
                display.textContent = currentInput;
                previousInput = '';
                operator = '';
            }
        } else if (['+', '-', '*', '/'].includes(value)) {
            if (currentInput) {
                operator = value;
                previousInput = currentInput;
                currentInput = '';
            }
        } else if (value === 'MC') {
            memory = 0;
        } else if (value === 'MR') {
            currentInput = memory.toString();
            display.textContent = currentInput;
        } else if (value === 'M+') {
            memory += parseFloat(currentInput);
        } else if (value === 'M-') {
            memory -= parseFloat(currentInput);
        } else {
            currentInput += value;
            display.textContent = currentInput;
        }
    });
});
