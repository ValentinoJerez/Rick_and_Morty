import SearchBar from "../SearchBar/SearchBar"
import { NavLink } from "react-router-dom"
import style from "./Nav.module.css"

export default function Nav({onSearch, random}) {
    return(
        <div className={style.nav}>
            <div>
              <NavLink to="/About">About</NavLink>
              <NavLink to="/Home">Home</NavLink>  
              <NavLink to="/Favorites">Favorites</NavLink>
            </div>
            <SearchBar onSearch={onSearch}/>
            <button className="random" onClick={random}>ADD RANDOM</button> 
        </div>
    )
}
