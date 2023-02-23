//definir variaveis

let jarra = 100;
let cafeteira = {
    po: true,
    agua: true,
    ligada: true,
    cafe_pronto:true
}
let xicara = 100;

//fazer café

if (jarra < 100) {
    //preciso fazer café
    console.log("Fazendo café quentinho...: ");

    if (cafeteira.po == false) {
        cafeteira.po = true;
    }
    if (cafeteira.agua == false) {
        cafeteira.agua = true;
    }
    if (!cafeteira.ligada) {
        cafeteira.ligada = true;
    }
    cafeteira.cafe_pronto == true;
    jarra = 100; 

} else if(xicara == 0) {
    //encher a xicara
    if(cafeteira.cafe_pronto){
        xicara = 100;
        jarra -= 100;
    }
    console.log("café quentinho na xicara...");
} else if (jarra > 100){
    //alerta de jarra derramando
    cafeteira.ligada = false;
    console.log("Jarra está cheia demais, cuidado...");
} else {
    //aquecer o café
    cafeteira.ligada = true;
    console.log("Estamos mantendo seu café quentinho...");
}