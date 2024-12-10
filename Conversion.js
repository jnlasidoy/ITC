// Select DOM elements
const converterForm = document.getElementById('converterForm');
const valueInput = document.getElementById('valueInput');
const conversionType = document.getElementById('conversionType');
const conversionResult = document.getElementById('conversionResult');

// Conversion functions
const convertFtoC = (fahrenheit) => (fahrenheit - 32) * (5 / 9);
const convertCtoF = (celsius) => (celsius * (9 / 5)) + 32;
const convertMtoF = (meters) => meters * 3.28084;
const convertFtoM = (feet) => feet / 3.28084;

// Handle form submission
const handleConversion = (event) => {
    event.preventDefault();

    const value = parseFloat(valueInput.value);
    const type = conversionType.value;

    if (isNaN(value)) {
        alert('Please enter a valid number.');
        return;
    }

    let result = 0;
    switch (type) {
        case 'ftoc':
            result = convertFtoC(value);
            break;
        case 'ctof':
            result = convertCtoF(value);
            break;
        case 'mtof':
            result = convertMtoF(value);
            break;
        case 'ftom':
            result = convertFtoM(value);
            break;
        default:
            alert('Invalid conversion type.');
            return;
    }

    conversionResult.textContent = result.toFixed(2);
};

// Attach event listener
converterForm.addEventListener('submit', handleConversion);
