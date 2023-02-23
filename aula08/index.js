//calculo dos ingredientes
function calculaIngredientes() {
    let ing1 = 1.00;
    let ing2 = 2.00;
    let ing3 = 3.00;
    let preco_ing = ing1 + ing2 + ing3;
    console.log("Valor ingrediente: ", preco_ing); 

    return preco_ing;  
}
//calculo da porcentagem da confeiteira

function calculaConfeiteira(preco_conf){
    let porc_conf = 30;
    preco_conf += preco_conf * porc_conf / 100;
    console.log("Valor confeiteira: ", preco_conf);

    return preco_conf;
}

//calculos das despesas de produção
function calculaDespesas (preco_desp) {
    preco_desp += 5;
    console.log("Valor despesas: ", preco_desp);

    return preco_desp;
}

//calculo dos custos fixos
function calculaCustoFixo (custo_fixo){
    custo_fixo += 10.00;
    console.log("Valor custos fixos: ", custo_fixo);

    return custo_fixo;
}
//function Arrow 
// calculaCustos = (custo_fixo) => custo_fixo += 10.00;

//calculo do meu lucro
function calculaLucro (preco_lucro) {
    preco_lucro += preco_final * 0.25;
    console.log("Valor lucro: ", preco_lucro);

    return preco_lucro;
}

//chamadas funções
let preco_final = calculaIngredientes();
preco_final = calculaConfeiteira(preco_final);
preco_final = calculaDespesas(preco_final);
preco_final = calculaCustoFixo(preco_final);
preco_final = calculaLucro(preco_final);

//Retornar o preço principal
console.log("Valor fical de venda: ", preco_final);