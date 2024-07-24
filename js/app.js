const cambiarTitulo = () => {
    console.log(`desde la funcion cabiarTitulo`);
    // obtener el  h1 del proyecto
    // const tituloPrincipal = document.getElementsByTagName(`p`);
    // const tituloPrincipal = document.getElementById(`titulo`);
    // const tituloPrincipal = document.getElementsByClassName(`btn`);
    // const tituloPrincipal = document.querySelector(`.btn`);
    const tituloPrincipal = document.getElementById(`titulo`);
    console.log(tituloPrincipal);

    // cambiar ese h1, texto y style
    // tituloPrincipal.innerText = `Cambiamos el titulo JS`
    tituloPrincipal.innerHTML = `Cambiamos el titulo  <strong>JS</strong>`;
}