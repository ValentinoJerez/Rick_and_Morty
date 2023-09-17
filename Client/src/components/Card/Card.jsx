import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {addFavorite, removeFavorite} from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

import style from "./Card.module.css"

 function Card(props) {
   //Extraemos informacion de cada personaje desde props:
   const navigate = useNavigate();
   const {character, onClose} = props;
   const [isFav, setFav] = useState(false);
   const [closeBotton, setCloseButton] = useState(true)
   const dispatch = useDispatch()
   const favorites = useSelector(state => state.favorites)

   function navigateHandler(){
      navigate(`/Detail/${character.id}`);
   }

   console.log(props)
   useEffect(()=>{
      if(!onClose){
         setCloseButton(false);
      }
   }, []);

   useEffect(() => {
      favorites.forEach((fav) => {
         if (fav.id === character.id) {
            setFav(true);
         }
      });
   }, [favorites]);
   
   // Agrego o elimino de favoritos
   function handleFavorite(){
      if(!isFav){
         dispatch(addFavorite(character));
         setFav(true);
      } else {
         dispatch(removeFavorite(character.id));
         setFav(false);
      }
   }

   return (
      <div className={style.Card}>
         {closeBotton && (<button onClick={()=>{onClose(character.id)}} className={style.buttonClose}>X</button>)}
         <div className={style.card}>
         {isFav ? (<button onClick={handleFavorite} className={style.buttonHeart}><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
         <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
         <path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" stroke-width="0" fill="currentColor"></path>
         </svg></button>) : 
         (<button onClick={handleFavorite} className={style.buttonHeart}><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
         <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
         <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
         </svg></button>)}
         <h2 onClick={navigateHandler} >{character.name}</h2>
         <img src={character.image} alt={name} onClick={navigateHandler}/>
          </div>
      </div>
   );
}

export default Card;

//Creo la funcion
//UseDispatch
// const mapDispatchToProps = (dispatch) => {
//    return {
//       addFavorite: (character) => dispatch(addFavorite(character)),
//       removeFavorite: (id) => dispatch(removeFavorite(id)),
//    };
// };

//UseSelector
// const mapStateToProps = (state) => {
//    return{
//       favorites: state.favorites,
//    }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Card);