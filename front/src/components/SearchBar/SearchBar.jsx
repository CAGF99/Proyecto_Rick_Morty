import styles from "./SearchBar.module.css"
import { useState } from "react";

export default function SearchBar(props) {
   const [character, setCharacter] = useState("");
   const handleChange = (event) =>{
      setCharacter(event.target.value); 
   };
   return (
      <div >
         <input type='search' value={character} onChange={handleChange}/>
         <button className={`${styles.nav__button}`} onClick={()=>props.onSearch(character)}>Agregar</button>
      </div>
   );
}
