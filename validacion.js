//Haz tú validación en javascript acá
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
}

submitbtn.addEventListenner('click', validate);
