import {getHeroesBYId} from "./bases/08-import";
import heroes from "./data/heroes";


/*
const promesa = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const heroe = getHeroesBYId(2)
        reject("No se pudo encontrar")
    }, 2000)
});


promesa.then((heroe)=>{
    console.log(heroe)
})
.catch( err => console.warn(err) )*/


const getHeroByIdASync = (id) => {
    return  new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const heroe = getHeroesBYId(id)
          if (heroe) {
              resolve(heroe)
          }else reject("No hay")
        }, 2000)
    });
}

getHeroByIdASync(1)
    .then(  console.log)
    .catch(  console.warn)