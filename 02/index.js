{
    const letras = ["A", "a", "B", "C", "L", "z"];

    let quantidade = 0;

    for (let letra of letras) {
        if (letra === 'e' || letra === 'E') {
            quantidade++;
        }
    }

    if (quantidade == 0) {
        console.log('Nenhuma letra "E" ou "e" foi encontrada.');
    } else {
        console.log(`Foram encontradas ${quantidade} letras "E" ou "e".`);
    }
}
{
    const letras = ["A", "a", "B", "C", "E", "e"];

    let quantidade = 0;

    for (let letra of letras) {
        if (letra === 'e' || letra === 'E') {
            quantidade++;
        }
    }

    if (quantidade == 0) {
        console.log('Nenhuma letra "E" ou "e" foi encontrada.');
    } else {
        console.log(`Foram encontradas ${quantidade} letras "E" ou "e".`);
    }
}