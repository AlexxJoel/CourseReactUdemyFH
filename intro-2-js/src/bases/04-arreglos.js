
// const arreglo = new Array(); excepcion no usar

const arreglo = [1,2,3,4];
/*
arreglo.push(1)
arreglo.push(2)
arreglo.push(3)
arreglo.push(4) no usar porque modifica
*/

//operador spred ... copia

let arreglo2 = [...arreglo, 5];
// arreglo2.push(5) no

//prototype
const arreglo3 = arreglo2.map(function (number){
    return number*2;
}) //callback

console.log(arreglo)
console.log(arreglo2)
console.log(arreglo3)