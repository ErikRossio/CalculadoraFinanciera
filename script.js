function calcularPlazoFijo() {
    // Obtener los valores de los campos de entrada
    var interestRate = parseFloat(document.getElementById('interestRate').value);
    var period = parseInt(document.getElementById('period').value);
    var amount = parseFloat(document.getElementById('amount').value);

    // Calcular el plazo fijo
    var interest = (interestRate / 100) * amount * (period / 365);
    var totalAmount = amount + interest;

    // Mostrar el resultado en la página
    document.getElementById('result').innerHTML = "El monto final después del plazo fijo es: $" + totalAmount.toFixed(2);
}

function mostrarCalculadora(calculadora) {
    if (calculadora === 'plazoFijo') {
        document.getElementById('plazoFijoCalculator').style.display = 'block';
        document.getElementById('ivaCalculator').style.display = 'none';
        document.getElementById('financieraCalculator').style.display = 'none';
    } else if (calculadora === 'iva') {
        document.getElementById('plazoFijoCalculator').style.display = 'none';
        document.getElementById('ivaCalculator').style.display = 'block';
        document.getElementById('financieraCalculator').style.display = 'none';
    } else if (calculadora === 'financiera') {
        document.getElementById('plazoFijoCalculator').style.display = 'none';
        document.getElementById('ivaCalculator').style.display = 'none';
        document.getElementById('financieraCalculator').style.display = 'block';
    }
}

function calcularFinanciera() {
        const salary = parseFloat(document.getElementById('salary').value);

        if (isNaN(salary) || salary <= 0) {
            alert('Por favor, ingresa un sueldo válido.');
            return;
        }
        const basicExpenses = (salary * 0.5).toFixed(2);
        const personalExpenses = (salary * 0.3).toFixed(2);
        const savingsDebts = (salary * 0.2).toFixed(2);

        document.getElementById('basicExpenses').textContent = `$${basicExpenses}`;
        document.getElementById('personalExpenses').textContent = `$${personalExpenses}`;
        document.getElementById('savingsDebts').textContent = `$${savingsDebts}`;

        document.getElementById('result').classList.remove('hidden');
    }

    // Mostrar los resultados
    document.getElementById('basicExpenses').textContent = `$${basicExpenses}`;
    document.getElementById('personalExpenses').textContent = `$${personalExpenses}`;
    document.getElementById('savingsDebts').textContent = `$${savingsDebts}`;

    document.getElementById('result').classList.remove('hidden');

function calcularIVA() {
    var precioSinIVA = parseFloat(document.getElementById('precioSinIVA').value);
    var tasaIVA = parseFloat(document.getElementById('tasaIVA').value);

    var precioConIVA = precioSinIVA * (1 + tasaIVA / 100);
    var montoIVA = precioConIVA - precioSinIVA;

    document.getElementById('ivaResult').innerHTML = `
        Precio con IVA: $${precioConIVA.toFixed(2)}<br>
        Monto de IVA: $${montoIVA.toFixed(2)}
    `;
}

