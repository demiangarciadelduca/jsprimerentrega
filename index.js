function calcularPrestamo(event) {
    event.preventDefault();

    const cantidadInput = document.getElementById("loan-amount");
    const cuotasInput = document.getElementById("loan-terms");
    const cantidad = parseFloat(cantidadInput.value);
    const cuotas = parseInt(cuotasInput.value);
    const tasaInteres = 152;(tasaDeInteresEfectivaAnual)

    if (cantidad >= 1 && cantidad <= 10000000 && cuotas >= 12 && cuotas <= 72) {
        const tasaMensual = tasaInteres / 100 / 12;
        const cuotaMensual =
            (cantidad * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -cuotas));
        const totalIntereses = cuotaMensual * cuotas - cantidad;

        const resultDiv = document.getElementById("result");
        resultDiv.innerHTML = `
        <h2>Resultado:</h2>
        <p>Cuota mensual: $${cuotaMensual.toFixed(2)}</p>
        <p>Total de intereses: $${totalIntereses.toFixed(2)}</p>
      `;
    } else {
        alert("Por favor, ingree valores validos");
    }
}
