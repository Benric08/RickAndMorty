import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import Card from './Card';
import { filterCards,orderCards } from '../redux/actions'
import { useState } from 'react';

export default function Favorites() {
  const myFavorites = useSelector(state=>state.myFavorites);
  const dispatch = useDispatch();
  const [aux,setAux] = useState(false);

  const handleFilter=(event)=>{
      dispatch(filterCards(event.target.value));
  }
  const handleOrder=(event)=>{
      dispatch(orderCards(event.target.value));
      setAux(!aux);
  }
  return (
    <div>
      <select onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>
      <select onChange={handleFilter}>
        <option value="allCharacters">All Characters</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>
      {myFavorites.map((favChar)=>{return <Card 
          key={favChar?.id} 
          name={favChar?.name}
          status={favChar?.status}
          species={favChar?.species}
          gender={favChar?.gender}
          origin={favChar?.origin}
          image={favChar?.image}

      />})}
    </div>
  )
}
