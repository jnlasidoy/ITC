// Select DOM elements
const taxForm = document.getElementById('taxForm');
const incomeInput = document.getElementById('incomeInput');
const taxOutput = document.getElementById('taxOutput');

// Function to calculate income tax
const calculateTax = (income) => {
    let tax = 0;

    if (income <= 250000) {
        tax = 0;
    } else if (income <= 400000) {
        tax = (income - 250000) * 0.20;
    } else if (income <= 800000) {
        tax = 30000 + (income - 400000) * 0.25;
    } else if (income <= 2000000) {
        tax = 130000 + (income - 800000) * 0.30;
    } else if (income <= 8000000) {
        tax = 490000 + (income - 2000000) * 0.32;
    } else {
        tax = 2410000 + (income - 8000000) * 0.35;
    }

    return tax;
};

// Handle form submission
const handleTaxCalculation = (event) => {
    event.preventDefault();

    const income = parseFloat(incomeInput.value);

    if (isNaN(income) || income < 0) {
        alert('Please enter a valid positive taxable income.');
        return;
    }

    const tax = calculateTax(income);

    taxOutput.textContent = tax.toLocaleString('en-PH', {
        style: 'currency',
        currency: 'PHP',
    });
};

// Attach event listener
taxForm.addEventListener('submit', handleTaxCalculation);
