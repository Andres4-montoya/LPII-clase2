// Fuciones

function sumar(numeroUno,numeroDos){//Normalmente los nombres de las fuciones debe empezar en verbos en infinitivo
return numeroUno+numeroDos
}
let sumarVersionDos = function (numeroUno,numeroDos){
    return numeroUno + numeroDos;

};// a través de fución anonima



let sumarVersionTres = (numeroUno, numeroDos) => {
    console.log("Soy el arrow function");
    
    return numeroUno + numeroDos;

 } ;

 let fucionUno = function (numeroUno,numeroDos,funcionDos){
    console.log("Estoy dentro de la función Uno");
    return  funcionDos(numeroUno ,numeroDos);
}

let fucionTres = (numeroUno, numeroDos)=>{
    console.log("Voy a restar");
    return numeroUno - numeroDos;

}
 // arrow  function / tambie es  función anonima
/*console.log(sumar(5,8));
console.log(sumar("Hola","Mundo"));
console.log(sumarVersionDos(10,20));
console.log(sumarVersionTres(90,6.8));
*/
console.log(fucionUno(10 , 40 , sumarVersionTres));
console.log(fucionUno(20 , 30 , fucionTres));
