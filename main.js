// Select the containers
const display = document.getElementById('display');
const btnContainer = document.getElementById('calButtons');
const historySidebar = document.getElementById('historySidebar');
const clearHistory = document.getElementById('clearHistory');
const closeHistory = document.getElementById('closeHistory');
const historyToggle = document.getElementById('historyToggle');
const themeToggle = document.getElementById('themeToggle');
const historyList = document.getElementById('historyList');
const historyPlaceholder = document.getElementById('historyPlaceholder');


// This is how you'll pull and add vaules and ops
let num1 = '';
let operator = '';
let num2 = '';


// Define button vaules
const btnValues = [
  'C', '/', '*', '-',
  '7', '8', '9', '+',
  '4', '5', '6', '=',
  '1', '2', '3',
  '0', '.'
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
            // This removes the message in the sidebar once an input is made
            const placeholder = document.querySelector(".historyPlaceholder");
            if (placeholder) {
                placeholder.remove();
            }
            // Display history items
            const historyItems = document.createElement("div");
            historyItems.textContent = `${num1} ${operator} ${num2} = ${result}`;
            historyList.appendChild(historyItems);

            display.value = result;
            
            num1 = '';
            operator = '';
            num2 = '';
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

    // Set button class
    button.className = 'calcBtn';

    // Append button to container
    btnContainer.appendChild(button); 
});

// Create a function for adding ops and num2 together
    function operate(num1, operator, num2) {
        if (operator === '+') return Number(num1) + Number(num2);
        if (operator === '-') return Number(num1) - Number(num2);
        if (operator === '*') return Number(num1) * Number(num2);
        if (operator === '/') return Number(num1) / Number(num2);
    };


// UI Toggles
// Open history sidebar
historyToggle.addEventListener("click", () => {
    historySidebar.classList.add("show");
});

// Close history sidebar
closeHistory.addEventListener("click", () => {
    historySidebar.classList.remove("show");
});

// Clear history later
clearHistory.addEventListener("click", () => {
historyList.innerHTML = '<div class="historyPlaceholder">No calculations yet!</div>';
});

// Toggle dark mode
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("darkmode");
});