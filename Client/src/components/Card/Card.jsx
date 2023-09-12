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
         {isFav ? (<button onClick={handleFavorite} className={style.buttonHeart}>❤️</button>) : 
         (<button onClick={handleFavorite} className={style.buttonHeart}>🤍</button>)}
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