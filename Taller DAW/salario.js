function calcularSalario() {
    var nombre = prompt('Introduzca el nombre del empleado:', '');
    var cargo = prompt('Introduzca el cargo que desempeña:', '');
    var horasT = parseFloat(prompt('Introduzca las horas trabajadas:', ''));
    var pagoHora = parseFloat(prompt('Introduzca cuanto se pago por hora:', ''));
    var salarioFinal, descuentoISS, descuentoAFP, descuentoRenta, salarioBase;

    salarioBase = horasT * pagoHora;

    const calcularDescuentos = (numero, porcentaje) => numero * (porcentaje / 100);

    descuentoISS = calcularDescuentos(salarioBase, 3);
    if (descuentoISS > 30) {
        descuentoISS = 30;
    }

    descuentoAFP = calcularDescuentos(salarioBase, 7.25);

    if (salarioBase >= 0.01 && salarioBase <= 472.00) {
        descuentoRenta = 0;
    } else if (salarioBase >= 472.01 && salarioBase <= 895.24) {
        descuentoRenta = calcularDescuentos(salarioBase, 10);
    } else if (salarioBase >= 895.25 && salarioBase <= 2038.10) {
        descuentoRenta = calcularDescuentos(salarioBase, 20);
    } else if (salarioBase >= 2038.11) {
        descuentoRenta = calcularDescuentos(salarioBase, 30);
    }

    salarioFinal = salarioBase - (descuentoISS + descuentoRenta + descuentoAFP);

    document.getElementById("resultado").textContent = `El salario final de ${nombre} (cargo: ${cargo}) después de los descuentos es: $${salarioFinal.toFixed(2)}`;
}
