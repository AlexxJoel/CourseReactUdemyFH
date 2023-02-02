const personajes = ['goku', 'vegeta', 'trunks'];


const [ , , p1] = personajes

console.log(p1)

const retornarArreglo = ()=>{
   return ['ABC', 234]
}

const [letras , numerios] = retornarArreglo();

console.log(letras , numerios)
//se destruvtura la funcion dentro del arreglo

