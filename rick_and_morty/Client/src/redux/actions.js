import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./actions-types";
import axios from "axios";

const endpoint = 'http://localhost:3001/rickandmorty/fav';
export const addFav=(character)=>{
   return (dispatch) => {
      axios.post(endpoint, character)
      .then(({ data }) => {
         return dispatch({
            type: ADD_FAV,
            payload: data,
         });
      });
   };
}
export const removeFav=(id)=>{
    
   return (dispatch) => {
      axios.delete(endpoint+"/"+id)
      .then(({ data }) => {
         return dispatch({
            type: REMOVE_FAV,
            payload: data,
      });
      });
   };
}
export const filterCards=(gender)=>{
    return {
        type:FILTER,
        payload:gender
    }
}
export const orderCards=(orden)=>{
    return {
        type:ORDER,
        payload:orden
    }
}