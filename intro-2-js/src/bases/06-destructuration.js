
//desustruturacion
//Asigancion de desestrucutacion

//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

const person = {
    nombre: 'tony',
    edad : 41,
    clave: "ironman",
    rango: "soladod"
}

const {nombre, edad} = person

console.log(person.clave)
console.log(nombre)
console.log(edad)

const auseContext2 = ({clave, nombre, edad, rango = "capitan"}) =>{
    //
    // console.log(nombre)
    // console.log(edad)
    // console.log(rango)

    return {
        nombreClave : clave,
        anios: edad,
        lat:{
            lati: 2334
        }
    }

}

const {nombreClave, anios, lat:{lati}} = auseContext2(person)

console.log(nombreClave, anios)
console.log(lati)