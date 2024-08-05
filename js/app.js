let mostrarParrafo = true;

const cambiarTitulo = () => {
  console.log(`desde la funcion cabiarTitulo`);
  // obtener el  h1 del proyecto
  // const tituloPrincipal = document.getElementsByTagName(`p`);
  // const tituloPrincipal = document.getElementById(`titulo`);
  // const tituloPrincipal = document.getElementsByClassName(`btn`);
  // const tituloPrincipal = document.querySelector(`.btn`);
  const tituloPrincipal = document.getElementById(`titulo`);
  console.log(tituloPrincipal);

  // tituloPrincipal.innerText = `Cambiamos el titulo JS`
  tituloPrincipal.innerHTML = `Cambiamos el titulo  <strong>JS</strong>`;
  tituloPrincipal.className = `text-info display-4`;
  // cambiar ese h1, texto y style
};
const crearParrafo = () => {
  const secciones = document.querySelectorAll(`section`);
  if (mostrarParrafo) {
    console.log(`desde crearParrafo`);
    // crear un nuevo parrafo
    const parrafoNuevo = document.createElement(`p`);
    parrafoNuevo.innerHTML = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab eius est,
       consequatur corrupti maiores exercitationem non! Veritatis, officiis corrupti sit odio aliquam 
       fugiat pariatur beatae earum necessitatibus. Ab a provident voluptatibus assumenda minima nulla 
       voluptate saepe eos laborum nobis? Quos debitis numquam aliquam doloribus. Maiores modi quia nesciunt harum ducimus?`;
    parrafoNuevo.className = `lead`;
    console.log(parrafoNuevo);
    // insertar el nuevo parrafo en el segundo section
    //   insertar el nuevo elemento
    //   secciones[1].appendChild(parrafoNuevo);
    // secciones[1].prepend(parrafoNuevo);
    secciones[1].insertBefore(parrafoNuevo, btnVerMas);
    // cambiar el texto del boton
    btnVerMas.innerHTML = `Ver menos`;
    // btnVerMas.className = `btn btn-outline-danger`;
    btnVerMas.classList.remove(`btn-outline-info`);
    btnVerMas.classList.add(`btn-outline-danger`);
    // cambio mi variable bandera
    mostrarParrafo = false;
  } else {
    console.log(`aqui borra el parrafo`);
    console.log(secciones[1].children);
    // eliminar un nodo
    secciones[1].removeChild(secciones[1].children[2]);
    //resetear el boton ver mas
    mostrarParrafo = true;
    btnVerMas.classList.remove(`btn-outline-danger`);
    btnVerMas.classList.add(`btn-outline-info`);
    btnVerMas.innerHTML = `Ver mas...`;
  }
};
const buscarPalabra = (e) => {
  e.preventDefault();
  console.log(e);
  console.log(`desde la funcion buscarPalabra`);
  //buscar el valor del input
  const input = document.querySelector(`.form-control`).value;
  console.log(input);
};

// agregar un evento a un elemento de html
const btnVerMas = document.querySelector(`.btn-outline-info`);
console.log(btnVerMas);
//traer el formulario
const formularioBusqueda = document.querySelector(`.d-flex`);

// manejadores de eventos
// cuando tengo que invocar una funcion con parametros es con una funcion anonima o arrow
// btnVerMas.addEventListener(`click`, () => crearParrafo(p1))
btnVerMas.addEventListener(`click`, crearParrafo);

formularioBusqueda.addEventListener(`submit`, buscarPalabra);
