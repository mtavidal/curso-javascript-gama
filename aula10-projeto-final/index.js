const prompt = require('prompt-sync')({sigint: true});

// receber pedido

function recebePedido() {
    let pedido = {
        sabor: null,
        confeitos: null
    }
    pedido.sabor = prompt("Qual o sabor do bolo? ")
    pedido.confeitos = prompt("Quais confeitos deseja? ")
    
    return pedido
}

//preparar pedido
function preparaPedido(pedido){
    //separa ingrediente
    let ingredientes_base = separaIngredientes(pedido)
    let tabuleiro = misturaBolo(pedido, ingredientes_base)
    let bolo = colocaForno(tabuleiro)
    bolo = confeitar(pedido, bolo)

    return bolo
}

function separaIngredientes(pedido){
    let ingredientes_base = 'ovos, leite, farinha, fermento'
    return ingredientes_base
}

function misturaBolo(pedido, ingredientes_base){
    return pedido.sabor + "," + ingredientes_base
}

function colocaForno(tabuleiro){
    return "Bolo de " + tabuleiro
}
function confeitar(pedido, bolo){
    return bolo + " confeitado com " + pedido.confeitos
}

//calculo do preco
function calculaPreco() {
    let preco_final = calculaIngredientes()
    preco_final = calculaConfeiteira(preco_final)
    preco_final = calculaDespesas(preco_final)
    preco_final = calculaGastos(preco_final)
    preco_final = calculaLucro(preco_final)

    return preco_final
}
function calculaIngredientes () {
    return 10.00
}
function calculaConfeiteira(preco_calc) {
    return preco_calc += preco_calc * 0.30
}
function calculaDespesas(preco_calc){
    return preco_calc += 5.00
}
function calculaGastos(preco_calc){
    return preco_calc += 15.00
}
function calculaLucro(preco_calc) {
    return preco_calc += preco_calc * 0.25
}

//entragar pedido
function entregaPedido(bolo, preco){
    console.log(" ")
    console.log("************* Pedido pronto *************")
    console.log("Aproveite o seu " + bolo)
    console.log("Total a pagar: R$" + preco +".")
    prompt("Quando terminar de comer aperte ENTER para pagar...")
}

//receber dinheiro
function receberDinheiro(preco) {
    let valor_pago = prompt("Digite o valor para pagar: ")
    while(valor_pago != preco){
        valor_pago = prompt("Valor incorreto, digite o valor correto: ")
    }
    console.log("Pagamento efetuado com sucesso!") 
    console.log("=============================================")
}

let resp = "s"
do {
    console.log("================ CONFEITARIA ================")
    let pedido = recebePedido()
    let bolo = preparaPedido(pedido)
    let preco = calculaPreco()
    entregaPedido(bolo, preco)
    receberDinheiro(preco)
    resp = prompt("Muito obrigado! Deseja pedir outro bolo (s/n): ")
} while (resp == "s")
console.log("================= Até a próxima! ================")