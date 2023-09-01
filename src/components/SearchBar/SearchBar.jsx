import { useState } from "react";

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
      <div>
         <input type='search' onChange={changeHandler} value={id} placeholder="Buscador"/>
         <button onClick={()=>onSearch(id)}>Agregar</button> 
      </div>
   );
}
