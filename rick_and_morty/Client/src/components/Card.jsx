import {Link} from 'react-router-dom';
import { addFav,removeFav } from '../redux/actions';
import {connect} from 'react-redux'
import { useState } from 'react';
import { useEffect } from 'react';

const mapDispatchToProps=(dispatch)=>{
   return {
      addFav:(character)=>dispatch(addFav(character)),
      removeFav:(id)=>dispatch(removeFav(id))
   }
}
const mapStateToProps=(state)=>{
   return {
      myFavorites: state.myFavorites
   }
}

function Card(props) {
   const [isFav,setIsFav] = useState(false);
   const handleFavorite=()=>{
      if (isFav) {
         setIsFav(!isFav);
         props.removeFav(props.id);
      }else{
         setIsFav(!isFav);
         props.addFav(props)
      }
   }

   useEffect(()=>{
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   },[props.myFavorites]);

   return (
      <div>
         {
            isFav ? (
               <button onClick={handleFavorite}>favorito</button>
            ) : (
               <button onClick={handleFavorite}>no favorito</button>
            )
         }
         <button onClick={()=>props.onClose(props.id)}>X</button>
         <Link to={`/detail/${props.id}`}>
            <h2>{props.name}</h2>
         </Link>
         <h2>{props.status}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.origin.name}</h2>
         <img src={props.image} alt='' /> 
      </div>
   );
}
export default connect(mapStateToProps, mapDispatchToProps)(Card)
