import Login from "../../components/Login/Login";
import style from "../LandingPage/LandingPage.module.css"

function LandingPage({login}){
    return(
        <div className={style.LandingPage}>
            <Login login={login}/>
        </div>
    )
}

export default LandingPage;