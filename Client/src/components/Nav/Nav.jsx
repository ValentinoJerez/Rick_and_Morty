import SearchBar from "../SearchBar/SearchBar"
import { NavLink } from "react-router-dom"
import style from "./Nav.module.css"

export default function Nav({onSearch, random}) {
    return(
        <div className={style.navBar}>
            <div className={style.navBrand}>
            <ul className={style.navbarBrand}>
                <li className={style.navBarNav}>
                    <NavLink to="/About" className={style.link}>About</NavLink>
                    <NavLink to="/Favorites" className={style.link}>Favorites</NavLink>
                    <NavLink to="/Home" className={style.link}>Home</NavLink>  
                </li>
                <li className={style.SearchBar}>
                    <SearchBar onSearch={onSearch} className={style.SearchBar}/>
                </li>
            </ul>
            </div>
            <button className={style.random} onClick={random}>RANDOM</button>   
        </div>
    )
}
