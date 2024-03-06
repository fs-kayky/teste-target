// #### Inversor de Palavras ####

// Função responsavel pelo processo de Inverter a palavra
const inverterString = (string) => { // <--- Palavra é passada pra função por parametro
    let reverso = '' // Variavel definida para armazenar a string invertida

//  ## Logica para fazer a inversão da palavra ##
    for(let i=0; i<string.length; i++){ 
        reverso = string[i] + reverso
    }

    return reverso; // Aqui retornamos a palavra já invertida
}

let palavra = 'Matrix' // <--- Insira a palavra a ser invertida aqui

invertido = inverterString(palavra); // Armazenamos a palavra invertida em uma variavel, para poder ser utilizada depois.

console.log(`${invertido}`) // Mostramos ao usuario a palavra invertida.
