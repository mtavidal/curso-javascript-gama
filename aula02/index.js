let vasilha_1;
vasilha_1 = "chocolate";
let vasilha_2 = "500ml de leite";
let vasilha_3 = "3 ovos";
let vasilha_4 = "5 colheres de farinha";

console.log("-------Variáveis------")
console.log(vasilha_1);
console.log(vasilha_2);
console.log(vasilha_3);
console.log(vasilha_4);

let vasilha_mistura = vasilha_1 + " - " + vasilha_2 + " - " + vasilha_3 + " - " + vasilha_4;

console.log("-------Mistura------")
console.log(vasilha_mistura)

let tabuleiro;
tabuleiro = "manteiga";
tabuleiro += " - " + vasilha_mistura;

console.log("-------Tabuleiro------")
console.log(tabuleiro)

tabuleiro = "Bolo de " + tabuleiro;
console.log("-------Forno------")
console.log(tabuleiro)

