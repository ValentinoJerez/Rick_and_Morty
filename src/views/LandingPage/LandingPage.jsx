import Login from "../../components/Login/Login";

function LandingPage({login}){
    return(
        <div className="LandingPage">
            <Login login={login}/>
        </div>
    )
}

export default LandingPage;