import { useState } from "react";
import searchIcon from "../../../assets/Imagenes/busqueda.svg";
import style from "../SearchBar/SearchBar.module.css"

export default function SearchBar(props) {
   const {onSearch} = props
   //Creo estado local
   const [id, setId] = useState ("") 

   //Hago que el valor se guarde
   function changeHandler(e){
      //Previene bug 
      e.preventDefault();
      let input= e.target.value;
      setId(input);
   }
   
   return (
      <div className={style.SearchBar}>
         <input type='search' onChange={changeHandler} value={id} placeholder="Search" className={style.searchInput}/>
         <div className={style.iconContainer}>
         <button onClick={()=>onSearch(id)} >
         <img src={searchIcon} alt="Search Icon" className={style.searchIcon}/>
         </button> 
         </div>
      </div>
   );
}
