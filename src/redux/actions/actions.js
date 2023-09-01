//Las actions devuelven actions que recibe el reducer
import { ADD_TO_FAVORITES, REMOVE_FAVORITES, ORDER, FILTER, RESET } from "./action-types";

export function addFavorite(character){
    return{
        type: ADD_TO_FAVORITES,
        payload: character, 
    };
}

export function removeFavorite(id){
    return{
        type: REMOVE_FAVORITES,
        payload : id,
    };
}

// Nuevas
export function filterCards(gender){
    return {
        type: FILTER,
        payload: gender
    };
}

export function order(order){
    return{
        type: ORDER,
        payload: order
    }
}

export function reset(){
    return{
        type: RESET,
    }
}