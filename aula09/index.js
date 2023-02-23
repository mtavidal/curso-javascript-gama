let cores = ['grena', 'branco', 'verde'];
console.log(cores);

// incluir e remover itens
console.log('---------incluir e remover itens----------');
cores.push('azul');
console.log(cores);
let cor = cores.pop();
console.log(cores, cor);

//percorrer um array
console.log('---------percorrer um array----------');
cores.forEach((cor, index) => {
    console.log(cor, index);
});

//fazer transformações em elementos
console.log('---------fazer transformações em elementos----------');
let cores_claras = cores.map((cor) => {
    return cor + ' claro';
});
cores_claras.forEach((cor, index) => {
    console.log(cor, index);
});

//filtrar elementos filter traz todos os elemendtos
console.log('---------filtrar elementos----------');
let cores_filtro = cores.filter(cor => cor.length == 6);
console.log(cores_filtro);

//pesquisar valores o find traz so o primeiro valor
console.log('---------pesquisar valores----------');
let cor_pesquisa = cores.find(cor => cor.length == 5);
console.log(cor_pesquisa);

//Pesquisar index encontra o primeiro e volta.
console.log('---------pesquisar index----------');
let cor_index = cores.findIndex(cor => cor.length == 5);
console.log(cor_index);