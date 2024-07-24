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
}
const crearParrafo = () =>{
    console.log(`desde crearParrafo`)
    // crear un nuevo parrafo

    // insertar el nuevo parrafo en el segundo section
}

// agregar un evento a un elemento de html
const btnVerMas = document.querySelector(`.btn-outline-info`);
console.log(btnVerMas);

// manejadores de eventos 
// cuando tengo que invocar una funcion con parametros es con una funcion anonima o arrow
// btnVerMas.addEventListener(`click`, () => crearParrafo(p1))
btnVerMas.addEventListener(`click`,crearParrafo);
