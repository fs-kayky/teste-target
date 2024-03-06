//#### VERIFICADOR SEQUENCIA FIBONNACI ####

const fibonacci = (num) => {  // <-- Função que recebe como parametro numero que quer ser analisado.

    var a=0, b=1, c 

    // ### Verificação previa, para ver se o numero analisado é 0 ou 1. ###

    if(num === a || num ===b) {
        return true
    }

    // ### Logica responsavel por percorrer a sequencia fibonnaci e comparar com o numero em questão ###
    // nota: assim que o numero em questão, é ultrapassado pela sequencia o while acaba.
    while(num > b) {
        c = a+b
        a = b
        b = c

        if( b === num){ // <--- Condição de parada, caso o numero seja igual a um numero da sequencia, a função retorna verdadeiro.
            return true
        }
    }
// Caso não seja encontrado na sequencia a função retorna falso.
    return false

}

const numero = 8; // <--- Insira o numero a ser analisado aqui!
resultado = fibonacci(numero) // <-- Controle da função. Nesse caso estou salvando em uma variavel para poder ser usado depois ou em outras partes do codigo.


// Analisando o resultado da função, devolvemos a mensagem para o usuario.
resultado ? console.log("Seu numero está presente na sequência...") : console.log("Seu numero não está presente na sequência...")

