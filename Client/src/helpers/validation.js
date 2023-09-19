function validar(input){
    //Declaro objeto vacio para alamacenar errores
    let errors = {};
    //Declaro validacion de email y contraseña:
    let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    let numberRegex = /\d/;

    //Email
    if(!emailRegex.test(input.email)){
        errors.email= '⚠ El email ingresado no es valido ⚠'
    }
    if(input.email.length >= 35){
        errors.email= '⚠ El email es muy largo ⚠'
    }
    //Password
    if(!numberRegex.test(input.password)){
        errors.password='⚠ La contraseña debe contener un numero ⚠'
    }
    if(input.password.length < 6 || input.password.length > 10){
        errors.password= "⚠ La contraseña ingresada no es valida ⚠";
    }
    return errors;
}

export default validar;