import SearchBar from "../SearchBar/SearchBar"
import { NavLink } from "react-router-dom"
import style from "./Nav.module.css"

export default function Nav({onSearch, random}) {
    return(
        <div className={style.navBar}>
            <ul className={style.navbarBrand}>
                <li className={style.navBarNav}>
                <NavLink to="/About" className={style.link}>About</NavLink>
                </li>
                <li className={style.navBarNav}>
                <NavLink to="/Favorites" className={style.link}>Favorites</NavLink>
                </li>
                <li className={style.navBarNav}>
                <NavLink to="/Home" className={style.link}>Home</NavLink>  
                </li>
            </ul>
                <div className={style.rightSection}>
                <li className={style.SearchBar}>
                    <SearchBar onSearch={onSearch} className={style.SearchBar}/>
                </li>
                <li className={style.navBarNav}>
                <button className={style.random} onClick={random}>RANDOM</button>   
                </li>
                </div>
            </div>
    )
}
