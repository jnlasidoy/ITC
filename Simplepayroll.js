// Select DOM elements
const payrollForm = document.getElementById('payrollForm');
const payrollTableBody = document.getElementById('payrollTableBody');

let employees = [];

// Calculate gross and net pay
const calculatePay = (daysWorked, dailyRate, deductionAmount) => {
    const grossPay = daysWorked * dailyRate;
    const netPay = grossPay - deductionAmount;
    return { grossPay, netPay };
};

// Render the payroll table
const renderTable = () => {
    payrollTableBody.innerHTML = employees
        .map((employee, index) => {
            const { name, daysWorked, dailyRate, grossPay, deductionAmount, netPay } = employee;
            return `
                <tr>
                    <td>${index + 1}</td>
                    <td>${name}</td>
                    <td>${daysWorked}</td>
                    <td>${dailyRate}</td>
                    <td>${grossPay.toFixed(2)}</td>
                    <td>${deductionAmount.toFixed(2)}</td>
                    <td>${netPay.toFixed(2)}</td>
                    <td><button onclick="deleteEmployee(${index})">Delete</button></td>
                </tr>
            `;
        })
        .join('');
};

// Add employee
const addEmployee = (event) => {
    event.preventDefault();

    const name = document.getElementById('employeeName').value.trim();
    const daysWorked = parseFloat(document.getElementById('daysWorked').value);
    const dailyRate = parseFloat(document.getElementById('dailyRate').value);
    const deductionAmount = parseFloat(document.getElementById('deductionAmount').value);

    if (!name || isNaN(daysWorked) || isNaN(dailyRate) || isNaN(deductionAmount)) {
        alert('Please fill out all fields correctly.');
        return;
    }

    const { grossPay, netPay } = calculatePay(daysWorked, dailyRate, deductionAmount);

    employees.push({ name, daysWorked, dailyRate, grossPay, deductionAmount, netPay });

    renderTable();
    payrollForm.reset();
};

// Delete employee
window.deleteEmployee = (index) => {
    employees.splice(index, 1);
    renderTable();
};

// Event listeners
payrollForm.addEventListener('submit', addEmployee);
