import { ADD_TO_FAVORITES, FILTER, ORDER, REMOVE_FAVORITES, RESET } from "../actions/action-types";

//Creo el estado inicial: Estado = Objeto
let initialState = {favorites: [], allCharacters: []}
//Siempre tener una copia del estado(characters)

//Creo reducer
function rootReducer(state = initialState, action){
    //Dentro va el switch
    switch(action.type){
        case ADD_TO_FAVORITES:
            return{
            ...state,
            //Agrego favoritos
            favorites: [...state.favorites, action.payload],
            //Genero copia para no perder
            allCharacters: [...state.allCharacters, action.payload]
        };
        case REMOVE_FAVORITES:
            return{
            ...state,
            //Elimino al personaje 
            favorites: state.favorites.filter(
            (characters) => characters.id != action.payload),
            allCharacters: state.allCharacters.filter(
            (characters) => characters.id != action.payload)
        };
        case FILTER:
            return{
                ...state,
                //Filtro dentro de la copia para no perder favoritos
                favorites: state.allCharacters.filter((character)=>character.gender === action.payload)
            }
        case ORDER:
            let orden;
            if(action.payload === "Ascendente"){
                orden = state.favorites.sort((a,b)=>a.id > b.id ? 1 : -1);
            } else {
                orden= state.favorites.sort((a,b)=>a.id < b.id ? 1 : -1);
            }
        return{
            ...state,
            favorites: [...orden]
        }
        case RESET:
            return {
                ...state,
                favorites: state.allCharacters
            };
        default:
            return state;
    }
}

//Exporto 
export default rootReducer;