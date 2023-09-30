//for
/*
for(let i = 0; i<10; i++){
    console.log(i);
}
*/
let variable = 0;
//console.log(variable++);//0
//console.log(++variable);//2
// while
//Pregunto y despues hablo
variable = 0 ;
/*
while(variable <= 2){
    variable++;
    console.log("Estoy en el wile")
}
*/
// do while
// Hago y despues pregunto
/*
do{
    console.log("Estoy en el do/while");
} while(variable==0);
*/
// for of
/*
let arreglo = ["Hola","Chao","Mundo","Cualquiera"]
for(elemento of arreglo){
    console.log(elemento)
} 
*/
//fon in
 let persona = {
    nombre: "Andres",
    apellido: "Montoya",
    edad: 15
 }

 for(key in persona){
    console.log(key + " -> "  + persona[key]) 
 }