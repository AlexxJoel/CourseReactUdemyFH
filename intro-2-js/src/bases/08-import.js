// import {heroes} from "./data/heroes"; solo export
// import heroes from "./data/heroes"; //export default
import heroes, {owner} from "./data/heroes";

console.log(owner)


const getHeroesBYId = (id)=>{
    return heroes.find( heroe => heroe.id=== id )
}

console.log(getHeroesBYId(2))

const getHeroesBYOwner = (owner)=>{
    return heroes.filter( heroe => heroe.owner=== owner )
}

console.log(getHeroesBYOwner("DC"))