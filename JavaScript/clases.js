class Persona{
    #nombre
    #apellido

    constructor(nombre,apellido){
        this.#nombre = nombre;
        this.#apellido = apellido;

    }
    get nombre() {
        return this.#nombre + "Otra cosa";
    }
}
let persona = new Persona("Andres","Montoya");
let persona2 = new Persona("Juan", "Bedoya")

console.log(persona.nombre);