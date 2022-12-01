/*
Archivo empleado para manejar las uncionalidades del forms y botones de la página web con Js
*/

// formulario de agregar dispositivo
const addForm = document.querySelector("#addForm");
const addLogin = document.querySelector("#login");

//console.log(window.location.pathname);

if(window.location.pathname == '/dash.html'){
    console.log("Estamos en el dash");
    addForm.addEventListener("submit", e => {
    e.preventDefault(); // evita que la página recargue
    // almacenamos la data del forms 
    const id = addForm["id"].value;
    const nombre = addForm["nombre"].value;
    // la enviamos al contrato inteligente 
   App.agregarDispositivo(id, nombre);
}) 
}

if(window.location.pathname == '/') {
    addLogin.addEventListener("submit", e => {
        e.preventDefault();
        const matricula = addLogin["matricula"].value;
        const pass = addLogin["contrasena"].value;
    
        if(matricula && pass != null){
            if((matricula == null || !matricula) || (pass == null || !pass)){
                console.log("Debe completar los campos");
                } else {
                //enviando al contrato inteligente
                App.inicio_sesion(matricula, pass);
                
                }
        } else {
            console.log("Debe completar los campos");
        }
    })
}















