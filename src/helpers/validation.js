function validar(input){
    //Declaro objeto vacio para alamacenar errores
    let errors = {};
    //Declaro validacion de email y contraseña:
    let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    let numberRegex = /\d/;

    //Email
    if(!emailRegex.test(input.email)){
        errors.email= 'el email ingresado no valido'
    }
    if(input.email.length >= 35){
        errors.email= 'The length of the field is too long'
    }
    //Password
    if(!numberRegex.test(input.password)){
        errors.password='La contraseña debe contener un numero'
    }
    if(input.password.length < 6 || input.password.length > 10){
        errors.password= "The password must have between 6 and 10 characters";
    }
    return errors;
}

export default validar;