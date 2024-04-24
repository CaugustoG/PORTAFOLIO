//Haz tú validación en javascript acá}
/*
const btnEnviar = document.getElementById('formcontato__botao');

const validacion = (e) => {
    e.preventDefault();
    const nombreDeUsuario = document.getElementById('nombre').value;
    const direccionEmail = document.getElementById ('Email').value;
    const asunto = document.getElementById ('asunto').value;
    const mensaje = document.getElementById ('mensaje').value;


    if (nombreDeUsuario.value === "" || nombreDeUsuario.lenght <= 1 || nombreDeUsuario.lenght >= 50){
        alert ("por favor, escriba aquí su nombre, ocupar menos de 50 caracteres");
        nombreDeUsuario.focus();
        return false;
    }

    if (direccionEmail.value === "" || direccionEmail === null || direccionEmail.lenght === 0){
        alert ("por favor, escriba aquí su E-mail");
        direccionEmail.focus();
        return false;
    }

    if (!(/\S+@\S+\.\S+/.test(direccionEmail))) {
        TextoError+="Error: debe ingresar un correo valido\n";
        correcto = false;
    }

    if (asunto.value === ""){
        alert ("por favor, escriba aquí su E-mail");
        direccionEmail.focus();
        return false;
    }

    if (mensaje.value === ""){
        alert ("por favor, escriba aquí su E-mail");
        direccionEmail.focus();
        return false;
    }
    return true;
}*/

////////////////

    const nombreDeUsuario = document.getElementById("nombre").value;
    const direccionEmail = document.getElementById ("Email").value;
    const asunto = document.getElementById ("asunto").value;
    const mensaje = document.getElementById ("mensaje").value;

function validacion() {

    // validacion del combre de usuario    
        if(nombreDeUsuario === "" || nombreDeUsuario === null || nombreDeUsuario.lenght === 0) {
        alert("Error: debe llenar este campo");
        nombreDeUsuario.focus();
        return false; 
        }

        else if(nombreDeUsuario.lenght <= 3 || nombreDeUsuario.lenght >= 20) {
            alert("Error: el nombre usuario debe tener entre 4 y 19 caracteres");
            nombreDeUsuario.focus();
            return false;
            }

        else if ( !(/^[0-9a-zA-Z]+$/.test(nombreDeUsuario)) ) {
            alert("Error: solo debe introducir valores alfanumericos") 
            nombreDeUsuario.focus();
            return false;
        
        } //solo está validando este bloque de código, lo demás lo ignora
        //validación del correo electrónico.
        
        if(direccionEmail === "" || direccionEmail === null || direccionEmail.lenght === 0) {
            alert("Error: debe llenar este campo");
            direccionEmail.focus();
            return false;
            }

        else if( !(/\S+@\S+\.\S+/.test(direccionEmail)) ) {
            alert("Error: debe ingresar un correo valido");
            direccionEmail.focus();
            return false;
        }

        // validación asunto
        if(asunto === "" || asunto === null || asunto.lenght === 0) {
            alert("Error: debe llenar este campo");
            asunto.focus();
            return false; 
            }
    
        else if(asunto.lenght <= 3 || asunto.lenght >= 50) {
            alert("Error: el nombre usuario debe tener entre 4 y 19 caracteres");
            asunto.focus();
            return false;
        }

        // validación mensaje
        if(mensaje === "" || mensaje === null || mensaje.lenght === 0) {
            alert("Error: debe llenar este campo");
            mensaje.focus();
            return false; 
            }
    
        else if(mensaje.lenght <= 3 || mensaje.lenght >= 50) {
            alert("Error: el nombre usuario debe tener entre 4 y 19 caracteres");
            mensaje.focus();
            return false;
        }
}
return true;
