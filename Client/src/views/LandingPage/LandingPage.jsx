import Login from "../../components/Login/Login";
import Portal from "../../../assets/Imagenes/portal.gif"
import Logo from "../../../assets/Imagenes/Rick_and_Morty.png"
import style from "../LandingPage/LandingPage.module.css"

function LandingPage({login}){
    return(
        <div className={style.overlay}>
            <div className={style.gifContainer}>
                <img src={Portal} alt="Portal" className={style.gif} />
            </div>
            <div className={style.logoContainer}>
                <img className={style.logo} src={Logo} alt="Logo"/>
            </div>
            <div className={style.component}>
                <Login login={login}/>
            </div>
        </div>
    )
}

export default LandingPage;