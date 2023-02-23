// (a + b - c)/ d * e
// se x for par soma 1, senao - 1.

let a = 1222;
let b = 22352;
let c = 34353;
let d = 4334;
let e = 53453;

let x = (a + b - c)/ d * e;

console.log(x);
x = parseInt(x);
if (x%2 === 0){
    console.log("Resultado: " + ++x);
} else {
    console.log("Resultado: " + --x);
}