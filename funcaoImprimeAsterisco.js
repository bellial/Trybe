'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


function imprimaQuadradoAsterisco(n) {
// não altere a linha acima
    
/*
 * Escreva nas linhas a seguir um código que 
 * imprima um quadrado de asteríscos
 * de altura e largura igual ao valor de n
 */
    
    for(var i=0; i<n; i++){
        var asteriscos = '';

    for (var linha=0; linha<n; linha++){
        asteriscos = asteriscos + "*"
    }
    console.log(asteriscos);
        }
    
// não altere a linha abaixo
}
// fim do seu código
