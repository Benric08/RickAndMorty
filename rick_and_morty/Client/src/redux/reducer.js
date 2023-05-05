import { ADD_FAV,FILTER,ORDER,REMOVE_FAV } from "./actions-types";
const initialState={
    myFavorites:[],
    allCharacters:[]
}
export default function reducer(state=initialState,action){
    const {type,payload}=action;
    switch (type) {
        case ADD_FAV:
            /* if (state.myFavorites.filter((favorites)=>favorites.id===parseInt(payload.id)).length) {
                return {...state}
            }else
            return {...state,myFavorites:[...state.myFavorites,payload]}; */
            return {...state,myFavorites:payload,allCharacters:payload}

        case REMOVE_FAV:
            //const newMyFavorites = state.myFavorites.filter((favorites)=>favorites.id!==parseInt(payload));
            return {...state,myFavorites:payload,allCharacters:payload};
        case FILTER:
            let charactersByGender=[];
            if (payload==='allCharacters') {
                charactersByGender=state.allCharacters;
            } else {
                charactersByGender=state.allCharacters.filter((char)=>char.gender===payload);
            }
            return{...state,myFavorites:charactersByGender}

        case ORDER:
            if (payload==='A') {
                state.allCharacters.sort((a,b)=>a.id-b.id);
            } else {
                state.allCharacters.sort((a,b)=>b.id-a.id);
            }
            return {...state,myFavorites:state.allCharacters}
        default:
            return{...state};
    }
}