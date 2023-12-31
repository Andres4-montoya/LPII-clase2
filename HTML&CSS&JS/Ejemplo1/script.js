//Destructuring
function crearServicio(titulo, descripcion){
    return `
       <div class="servicio">
       <h3> ${titulo}</h3>
       <p>${descripcion}</p>
       </div>
    `;
}

function crearModal(){
    return `
    <div class="contenedor-modal">
     <div class="modal">
         <h2>Bienvenido</h2>
         <button id="botton-cerrar">Cerrar</button>
     </div>
    </div>
    `;
}

function crearServicioConObjetos({titulo, descripcion}){
    const contenedorServicio = document.createElement('div');
    const parrafo = document.createElement('p');
    parrafo.innerText = descripcion;
    const heading = document.createElement('h3');
    heading.innerText = titulo;
    contenedorServicio.appendChild(heading);
    contenedorServicio.appendChild(parrafo);
    contenedorServicio.classList.add("servicio");
    return contenedorServicio;
}
const data = [
    {titulo: "Sección Uno", descripcion: "Descripción de la  sección uno"},
    {titulo: "Sección  Dos", descripcion: "Descripción de la  sección  dos"},
    {titulo: "Sección Tres", descripcion: "Descripción de la  sección tres"},
    {titulo: "Sección Cuatro", descripcion: "Descripción de la  sección cuatro"},
    {titulo: "Sección Cinco", descripcion: "Descripción de la  sección cinco"},
    {titulo: "Sección Seis", descripcion: "Descripción de la  sección seis"},
    {titulo: "Sección Siete", descripcion: "Descripción de la  sección siete"}    
];
const contenedor = document.querySelector('.contenedor-servicios')


for(servicio of data){
    const{descripcion} = servicio;
    console.log(descripcion);
    const servicioHtml = crearServicioConObjetos(servicio);
    contenedor.appendChild(servicioHtml);   
  // contenedor.insertAdjacentHTML('beforeend', servicioHtml); 
}
document.body.insertAdjacentHTML('beforeend', crearModal());
const botonCerrar = document.getElementById("botton-cerrar");
const modal = document.querySelector(".contenedor-modal")
botonCerrar.addEventListener('click', () => modal.remove());
