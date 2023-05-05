import SearchBar from './SearchBar'
import {NavLink}  from 'react-router-dom'
export default function Nav(props){
    //const id=Math.floor(Math.random()*826);
    return (
    <div>
        <SearchBar onSearch={props.onSearch} />
        {/* <button onClick={()=>props.onSearch(id)}>Agregar Aleatoriamente</button> */}
        <NavLink to={'/about'}>
            <button>About</button>
        </NavLink>
        <NavLink to={'/home'}>
            <button>Home</button>
        </NavLink>
        <NavLink to={'/favorites'}>
            <button>Favorites</button>
        </NavLink>
        <button onClick={props.logout}>Log out</button>
    </div>

    );
}