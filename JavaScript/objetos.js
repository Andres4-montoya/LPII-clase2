let persona = {
    nombre: "Andres",
    id: "1234",
    apellido: "Montoya",
    esProfesor: false,
    estudiantes: 
    [
        {
         id:1,
         nombre:"Fabian"
        },
        {
            id:2,
            nombre: " Juan David"
        }
    ]


}
/*
console.log(persona);
console.log(persona.estudiantes[0]);
console.log(persona.estudiantes[1]);
*/
//Funcion constructor 

function Persona( nombre, apellido, esProfesor){
    this.nombre = nombre;
    this.apellido = apellido;
    this.esProfesor = esProfesor;

}

let personaDos = new Persona("Andres","Montoya",false);
personaDos.id = 1234;
delete personaDos.id;
console.log(personaDos);