{
    const numeros = [54, 22, 14, 87, 10, 284];

    let posicao = 0;

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] == 10) {
            posicao = i;
        }
    }
    if (posicao !== 0) {
        console.log(posicao);
    } else {
        console.log(-1);
    }
}

{
    const numeros = [54, 22, 14, 87, 284];

    let posicao = 0;

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] == 10) {
            posicao = i;
        }
    }
    if (posicao !== 0) {
        console.log(posicao);
    } else {
        console.log(-1);
    }
}