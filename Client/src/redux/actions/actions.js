//Las actions devuelven actions que recibe el reducer
import { ADD_TO_FAVORITES, REMOVE_FAVORITES, ORDER, FILTER, RESET } from "./action-types";
import axios from "axios"

export const addFavorite = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
        try {
            const {data} = await axios.post(endpoint, character)
               return dispatch({
                  type: ADD_TO_FAVORITES,
                  payload: data,
               });
        } catch (error) {
            alert(error)
        }
    };
 };


export const removeFavorite = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return async (dispatch) => {
        try {
            const {data} = await axios.delete(endpoint)
              return dispatch({
                 type: REMOVE_FAVORITES,
                 payload: data,
                });
            } catch (error) {
            alert(error)
        }
    };
};
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