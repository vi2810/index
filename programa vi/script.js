function calcularVolume() {
    const c = parseFloat(document.getElementById("comprimento").value);
    const l = parseFloat(document.getElementById("largura").value);
    const a = parseFloat(document.getElementById("altura").value);

    if (isNaN(c) || isNaN(l) || isNaN(a)) {
        document.getElementById("resultado").innerText = "Por favor, preencha todos os campos corretamente.";
    } else {
        const volume = c * l * a;
        document.getElementById("resultado").innerText = `Volume: ${volume.toFixed(2)} m³`;
    }
}
function calcularMassa() {
    const c = parseFloat(document.getElementById("comprimento").value);
    const l = parseFloat(document.getElementById("largura").value);
    const a = parseFloat(document.getElementById("altura").value);
    const densidade = parseFloat(document.getElementById("tipoConcreto").value);

    if (isNaN(c) || isNaN(l) || isNaN(a)) {
        document.getElementById("resultadoMassa").innerText = "Preencha as medidas corretamente antes de calcular a massa.";
    } else {
        const volume = c * l * a;
        const massa = volume * densidade;
        document.getElementById("resultadoMassa").innerText = `Massa estimada: ${massa.toFixed(2)} kg`;
    }
}

