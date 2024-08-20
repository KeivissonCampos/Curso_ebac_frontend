const form = document.getElementById('form-container');
const button = document.querySelector('button');
const erroNumber = document.querySelector('.erro-number');
const containerNumber = document.querySelector('.container-numbers');
const textInfo = document.getElementById('textInfo');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');

let validador = false;

function validarNumeros() {
    const primeiroNumero = parseInt(campoA.value);
    const segundoNumero = parseInt(campoB.value);

    if (isNaN(primeiroNumero) || isNaN(segundoNumero)) {
        button.style.backgroundColor = 'rgba(0, 128, 0, 0.541)';
        validador = false;
        return;
    }

    if (primeiroNumero < segundoNumero) {
        erroNumber.style.display = 'none';
        campoA.style.border = '1px solid black';
        button.style.backgroundColor = 'green';
        validador = true;

    } else {
        erroNumber.style.display = 'block';
        campoA.style.border = '1px solid red';
        button.style.backgroundColor = 'rgba(0, 128, 0, 0.541)';
        validador = false;
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (validador) {
        textInfo.style.display = 'block';
        containerNumber.style.display = 'none';
    }
});

campoA.addEventListener('input', validarNumeros);
campoB.addEventListener('input', validarNumeros);
