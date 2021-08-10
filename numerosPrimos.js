
const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

let readLine = () => inputString[currentLine++];



function buscaNumeroPrimos(n) {
//não altere a linha acima

/*
 * Nas linhas a seguir, escreva um código que encontre todos
 * os números primos entre 0 e n e coloque-os num array chamado
 * `numerosPrimos`(você deve criar esse array)
 */
    var numerosPrimos=[];
    
    for(var numero=2; numero<n; numero++){
        var divisores=0;
        
        for(var aux=2; aux<numero; aux++){
            if(numero % aux ==0){
                divisores ++;
            }
        }
        if (divisores ==0){
            numerosPrimos.push(numero);
        }
    }
 
    
    
    

//não altere as linhas abaixo
  return numerosPrimos;
}

// fim do seu código
