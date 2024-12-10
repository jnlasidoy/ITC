// Select DOM elements
const numberInput = document.getElementById('numberInput');
const factorialButton = document.getElementById('factorialButton');
const sumButton = document.getElementById('sumButton');
const averageButton = document.getElementById('averageButton');
const resultDisplay = document.getElementById('resultDisplay');

// Calculate factorial using a while loop
const calculateFactorial = (n) => {
    let factorial = 1;
    let i = n;
    while (i > 1) {
        factorial *= i;
        i--;
    }
    return factorial;
};

// Calculate the sum of the first n numbers using a do-while loop
const calculateSum = (n) => {
    let sum = 0;
    let i = 1;
    do {
        sum += i;
        i++;
    } while (i <= n);
    return sum;
};

// Calculate the average of the first n numbers using a for loop
const calculateAverage = (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum / n;
};

// Validate input and display result
const handleCalculation = (operation) => {
    const n = parseInt(numberInput.value, 10);

    if (isNaN(n) || n < 0) {
        alert('Please enter a valid non-negative integer.');
        return;
    }

    let result;
    switch (operation) {
        case 'factorial':
            result = calculateFactorial(n);
            break;
        case 'sum':
            result = calculateSum(n);
            break;
        case 'average':
            result = calculateAverage(n);
            break;
        default:
            result = 'Invalid operation';
    }

    resultDisplay.textContent = result;
};

// Attach event listeners to buttons
factorialButton.addEventListener('click', () => handleCalculation('factorial'));
sumButton.addEventListener('click', () => handleCalculation('sum'));
averageButton.addEventListener('click', () => handleCalculation('average'));
