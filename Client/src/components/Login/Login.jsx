import { useState } from "react";
import validar from "../../helpers/validation";
import Logo from "../../../assets/Imagenes/Rick_and_Morty.png"
import style from "./Login.module.css"

function Login({login}) {
    //Almacenar informacion en el estado
    const [user, setUser] = useState({
        email: "",
        password:""
    });

    //Genero estado para los errores:
    const [errors, setErrors] = useState({
        email: "",
        password:"",
    });

    //Recibe un evento y modifica lo que esta dentro del estado
    function handleChange(event){
        setUser({
            //Evito que se pise
            ...user,
            //Le indico que tome el valor del input ya sea para email o pass
            [event.target.name]: event.target.value,
        });
        setErrors(
            validar(
            {...user, 
            [event.target.name]: event.target.value,
            })
        );
    }

    function submitHandler(event){
        //Si o si hacerlo en submit
        event.preventDefault(user);
        login(user);
    }

    function disableHandler(){
        let disabled;
        for(let error in errors){
            if(errors[error]===""){
                disabled = false
            } else {
                disabled = true;
                break;
            };
        };
        return disabled;
    }

    return(
        <div className={style.body}>
            <form onSubmit={submitHandler} className={style.form}>
                <div className={style.logo}>
                    <img src={Logo} alt="Logo Rick and Morty" style={{width: "25vw"}} />
                </div>
                <label></label>
                <input 
                placeholder="Email" 
                name="email" 
                onChange={handleChange}
                type="email"
                className={style.email}
                />
                <span className={style.error}>{errors.email}</span>
                <label></label>
                <input 
                placeholder="Password" 
                name="password"
                onChange={handleChange}
                type="password"
                className={style.password}
                /><span className={style.error}>{errors.password}</span>
                <button 
                disabled={disableHandler()}
                type="submit"
                className={style.buttonlogin}>Ingresar</button>
            </form>
        </div>
    )
}

export default Login;