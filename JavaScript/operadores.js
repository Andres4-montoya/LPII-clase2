// Operador ternario

function cualquiera (cualquierValor){
    return cualquierValor> 0 ? 10 : 20;
}

//console.log(cualquiera(-1))
//Operador opcional 
let persona = {
 nombre: "Andre",
 apellido: "Montoya",
hijo:{}

}
 
//console.log(persona?.hijos?.numerodeHijos)

// ?? Operado nullish
//Retorna "Valor por defecto " s la propiedad está nuula o undefined
console.log(persona.hijos ?? "Valor por defecto")

//=== Y ==
//=== Valida valor y tipo
//== Valida únicamente el valor

console.log(5== '5')
console.log(5 === '5')