const nombre = "joel";
const apellido = "Herrera";

// const nombreCompleto = nombre +" "+apellido;
const nombreCompleto = `${nombre} ${apellido}` ;
// `backticks` `
console.log(nombreCompleto)

function getSaludo(name){
    return 'hola '+ name;
}

console.log(`Este es un saludo ${getSaludo(nombre)}`); 