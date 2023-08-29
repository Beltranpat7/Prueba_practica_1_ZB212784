var notas = [];

function obtenerNotas() {
    while (true) {
        var nombreMateria = prompt('Introduzca el nombre de la materia:', '');
        var notaFinal = prompt('Introduzca la nota final de esta materia: ', '');
        var UV = prompt('Introduzca las unidades valorativas (UV): ', '');

        notas.push({
            nombreMateria,
            notaFinal: parseFloat(notaFinal),
            UV: parseFloat(UV)
        });

        const continuar = confirm("Desea agregar otra materia?");
        if (!continuar) {
            break;
        }
    }

    mostrarResultados();
    const cum = calcularCum(notas); 
    document.getElementById("resultadoCUM").textContent = "El CUM es: " + cum.toFixed(2);
}

function mostrarResultados() {
    const tbody = document.querySelector("#resultadoTabla tbody");
    tbody.innerHTML = ""; // Limpiamos el contenido actual

    for (const materia of notas) {
        const row = `
            <tr>
                <td>${materia.nombreMateria}</td>
                <td>${materia.notaFinal}</td>
                <td>${materia.UV}</td>
            </tr>
        `;
        tbody.innerHTML += row;
    }
}

function calcularCum(notas) {
    let suma = 0;
    let uvsuma = 0;
    for (const elemento of notas) {
        suma += elemento.notaFinal * elemento.UV;
        uvsuma += elemento.UV;
    }
    return suma / uvsuma;
}
