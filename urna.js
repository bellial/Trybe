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
 * Complete a função 'urna' abaixo.
 *
 * O retorno da função é uma variável do tipo CHARACTER.
 * O parâmetro da função é a variável votos, do tipo CHARACTER_ARRAY.
 */

function urna(votos) {
    // Escreva seu código aqui
    let map = new Map();
    
    for (let i=0; i<votos.length; i++){
        if (map.has(votos[i])) {
            map.set(votos[i], map.get(votos[i]) +1);        
        }else
        map.set(votos[i], 1);        
    }
    //Quem ganhou
    let max = 0;
    let winner = "";
    
    for (let [key, value] of map.entries()){
        let Key = key;
        let val = value;
        
        if (val>max) {
            max = val;
            winner = key;
        }
    }
    return winner;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const votosCount = parseInt(readLine().trim(), 10);

    let votos = [];

    for (let i = 0; i < votosCount; i++) {
        const votosItem = readLine()[0];
        votos.push(votosItem);
    }

    const result = urna(votos);

    ws.write(result + '\n');

    ws.end();
}

