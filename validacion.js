//Haz tú validación en javascript acá
const btnEnviar = document.getElementById('formcontato__botao');

const validacion = (e) => {
    e.preventDefault();
    const nombreDeUsuario = document.getElementById('nombre');
    const direccionEmail = document.getElementById ('Email');
    const asunto = document.getElementById ('asunto');
    const mensaje = document.getElementById ('mensaje');


    if (nombreDeUsuario.value === "" || nombreDeUsuario.lenght <= 50){
        alert ("por favor, escriba aquí su nombre");
        nombreDeUsuario.focus();
        return false;
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

    if (direccionEmail.value === ""){
        alert ("por favor, escriba aquí su E-mail");
        direccionEmail.focus();
        return false;
    }
    return true;
}

submitbtn.addEventListenner('click', validate);
