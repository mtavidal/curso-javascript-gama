// lista de produtos
let produtos = [
    {
        codigo: 1,
        validade: new Date('2050-07-07') //criando uma data, tipo data em javascript
    },
    {
        codigo: 2,
        validade: new Date('2050-08-08')
    },
    {
        codigo: 3,
        validade: new Date('2050-08-08')
    },
    {
        codigo: 4,
        validade: new Date('2050-08-08')
    },
    {
        codigo: 5,
        validade: new Date('2050-08-08')
    },
    {
        codigo: 6,
        validade: new Date('2050-06-08')
    }
]

//verificar a validade de cada produto da lista

for (let i = 0; i < produtos.length; i++){
    if (produtos[i].validade < new Date ('2050-08-01')){
        console.log("Produto vencido");
    } else {
        console.log("Produto dentro do prazo de validade")
    }
}
    