//String
let container_verde = "texto";
console.log("container_verde = " + typeof(container_verde));

//inteiro 
let container_azul = 10;
console.log("container_azul = " + typeof(container_azul));
let container_azulEscuro = -10;
console.log("container_azulEscuro = " + typeof(container_azulEscuro));

//float 
let container_branco = 1.25;
console.log("container_branco = " + typeof(container_branco));
//boolean
let container_amarelo = true;
console.log("container_amarelo = " + typeof(container_amarelo));
let container_amareloEscuro = false;
console.log("container_amareloEscuro = " + typeof(container_amareloEscuro));


//Array
let navio = [];

navio[0] = container_verde;

navio.push(container_azul);
navio.push(container_azulEscuro);
navio.push(container_branco);
navio.push(container_amarelo);
navio.push(container_amareloEscuro);

console.log("navio = " + typeof(navio));


//objeto
let carro = {};
carro = {
    cor: "preto",
    marca: "ford",
    modelo: "focus",
    ano: "2009"
};
console.log("carro = " + typeof(carro));
navio.push(carro);


//null -> é vazio, é nada - não é zero. nulo dentro de container, vira objeto
container_azulEscuro = null;
console.log("container_azulEscuro = " + typeof(container_azulEscuro));


//undefined - não é definida.
let container_preto;
console.log("container_preto: " + typeof(container_preto))
// navio.push(container_preto);

//array
console.log("Navio: " + navio);
console.log("Carro: ");
console.log(navio[6]);

let focus = navio.pop();
console.log("Navio: " + navio);
console.log("FOcus:");
console.log(focus);

//objeto
console.log("FOcus:");
console.log(focus.ano);

focus.placa = "XXX-XXXX";
console.log("FOcus:");
console.log(focus);