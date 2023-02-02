

const persona = {
    nombre : 'joel',
    apellido: "Herrera",
    edad: 45, //buen parctica la coma al ultimo valor
    direccion: {
        ciudad : 'new york',
        zip: 23442,
    }
}
//objetos usan pares de valores
//todo tienen un prototyepe es como su adn hay funciones

//console.table(persona) //esto es lo mismo
// console.log({persona: persona}) que esto


console.log(persona)

//const persona2 = persona; //refernaica de memoria copia
const persona2 = {...persona}; //clonacion del objeto
persona2.nombre = "mike"


console.log(persona2)