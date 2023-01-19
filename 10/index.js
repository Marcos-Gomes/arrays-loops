
const numeros = [15, 3, 2, 25, 13, 1];

let maiorDiferenca = 0;

for (let i = 0; i < numeros.length; i++) {
    for (let j = 1; j < numeros.length; j++) {
        let diferenca = numeros[i] - numeros[j];
        if (diferenca > 0) {
            if (diferenca > maiorDiferenca) {
                maiorDiferenca = diferenca;
            }
        }

    }
}

console.log(maiorDiferenca);