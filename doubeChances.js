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


/*
 * Complete a função 'doubleTheChances' abaixo.
 *
 * O retorno da função é uma variável do tipo INTEGER_ARRAY.
 * O parâmetro da função é a variável chances do tipo INTEGER_ARRAY.
 */

function doubleTheChances(chances) {
    // Escreva seu código aqui
var resultado=[];

for(var i=0; i<chances.length; i++){
    var elementoMultiplicadoPorDois = chances[i] * 2;
    resultado.push(elementoMultiplicadoPorDois);
}
return resultado;
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const chancesCount = parseInt(readLine().trim(), 10);

    let chances = [];

    for (let i = 0; i < chancesCount; i++) {
        const chancesItem = parseInt(readLine().trim(), 10);
        chances.push(chancesItem);
    }

    const result = doubleTheChances(chances);

    ws.write(result.join('\n') + '\n');

    ws.end();
}

