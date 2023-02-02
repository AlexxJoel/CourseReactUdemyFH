
/*
function saludar(name){
    return `Hola, ${name}`;
}
saludar = 30 //sobreescribe
*/


const saludar2 =  name => {
    return `Hola, ${name}`;
}

const saludar3 =  name => `Hola, ${name}`;

console.log(saludar2('Joel'))
console.log(saludar3('Joel'))

// console.log(saludar2)


const getUser = () =>
    ( {
        uid : 'ABCDE',
        username : "eef"
    })


console.log(getUser())

//1. Arrow functio
//reutn a objet implicit
function getUsuarioActivo ( name ){
    return{
        uid: "drrrr",
        username : "nhdub"
    }
}

const  getUsuarioAtivo2 = name => ({
    uid: "drrrr",
    username: "nhdub"
})


const usuarioActivo = getUsuarioActivo("Jooel")
const usuarioActivo2 = getUsuarioAtivo2("Jooooel")

console.log(usuarioActivo2)