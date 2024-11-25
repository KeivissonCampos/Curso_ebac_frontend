"use strict";
var teste;
(function (teste) {
    const numero1 = 10;
    const numero2 = 15;
    const nome = "Keivisson";
    function multiplicar(n1, n2) {
        return n1 * n2;
    }
    function saudacao(nome) {
        return "Olá " + nome;
    }
    console.log(multiplicar(numero1, numero2));
    console.log(saudacao(nome));
})(teste || (teste = {}));
