// Select the containers
const btnContainer = document.getElementById('calButtons');
const display = document.getElementById('display');

// This is how you'll pull and add vaules and ops
let num1 = '';
let operator = '';
let num2 = '';


// Define button vaules
const btnValues = ['7', '8', '9', '4', '5',
    '6', '1', '2', '3', '+', '0', '.',
    '-', '*', '/', '=', 'C'
];

// Create and append buttons this is where the loop starts!
btnValues.forEach(value => {
    const button = document.createElement('button');     // Create button element
    // set button text
    button.textContent = value;
    // Add Event Listener on click
    button.addEventListener('click', () => {
        if (value === '=') {
            let result = operate(num1, operator, num2);
            display.value = result;
        } else if (value === 'C') {
            num1 = '';
            operator = '';
            num2 = '';
            display.value = '';
        } else if (['+', '-', '*', '/'].includes(value)) {
            operator = value;
            display.value += value;
        } else {
            if (operator === '') {
                num1 += value;
            } else {
                num2 += value;
            }
        display.value += value;
        }
    });
    // Create a function for adding ops and num2 together
    function operate(num1, operator, num2) {
        if (operator === '+') return Number(num1) + Number(num2);
        if (operator === '-') return Number(num1) - Number(num2);
        if (operator === '*') return Number(num1) * Number(num2);
        if (operator === '/') return Number(num1) / Number(num2);
    }

    // set button class
    button.className = 'calButtons';
    // Append button to container
    btnContainer.appendChild(button); 
});
