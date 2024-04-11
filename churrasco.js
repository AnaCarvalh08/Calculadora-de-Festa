let inputAdultos = document.getElementById('adultos');
let inputCrianca = document.getElementById('crianca');
let inputDuracao = document.getElementById('duracao');
let divResultados = document.getElementById('resultados');

function calcular() {
    let adultos = inputAdultos.value;
    let criancas = inputCrianca.value;
    let duracao = inputDuracao.value;

    //regras
    //adultos: média 300g por 4h >5h 100g (carne)
    //crianças: média 150g por 4h > 5h 50g(carne)
    //liquidos: média 2L adultos por 5h
    //liquidos: média 1L crianças por 5h
    //cerveja: 1,5L até 5 horas (latinhas 350ml)

    let qtdTotalCarne = carnePorPessoa(duracao) * adultos + (carnePorPessoa(duracao) / 2 * criancas)//parâmetro
    console.log(qtdTotalCarne);

    let qtdTotalBebidas = bebidaPorPessoa(duracao) * adultos + (bebidaPorPessoa(duracao) / 2 * criancas)
    console.log(qtdTotalBebidas);

    let qtdTotalCerveja = cervejaPorPessoa(duracao) * adultos;
    console.log(qtdTotalCerveja);

    divResultados.innerHTML = `
        <ul>
            <li>
                    <img src="./carne.png" alt="Icone churrasco">
                    <span>${qtdTotalCarne / 1000} Kg de carne</span>
            </li>
            <li>
                    <img src="./cerveja.png" alt="Icone cerveja">
                    <span>${Math.ceil(qtdTotalCerveja / 350)} latinhas de cerveja</span>
            </li>
            <li>
                    <img src="./refrigerante.png" alt="Icone bebidas">
                    <span>${Math.ceil(qtdTotalBebidas / 2000)}  garrafas de 2 litros</span>
            </li>
        </ul>
    `
}

function carnePorPessoa(duracao) { //*argumento*//
    if (duracao > 4) {
        return 500
    } else {
        return 300
    }
}

function bebidaPorPessoa(duracao) {
    if (duracao > 6) {
        return 1500
    } else {
        return 600
    }
}

function cervejaPorPessoa(duracao) {
    if (duracao > 6) {
        return 2000
    } else {
        return 1200
    }

}