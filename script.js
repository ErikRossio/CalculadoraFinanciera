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
    } else if (calculadora === 'iva') {
        document.getElementById('plazoFijoCalculator').style.display = 'none';
        document.getElementById('ivaCalculator').style.display = 'block';
    }
}

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

function mostrarCalculadora(calculadora) {
    document.getElementById('plazoFijoCalculator').style.display = calculadora === 'plazoFijo' ? 'block' : 'none';
    document.getElementById('ivaCalculator').style.display = calculadora === 'iva' ? 'block' : 'none';
}
