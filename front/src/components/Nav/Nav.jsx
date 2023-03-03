import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css";

function Nav({ onSearch }) {
  return (
    <div className={`${styles.nav}`}>
      <div className={`${styles.nav__menu}`}>

          <Link to="/" className={`${styles.nav__menu_login}`}>Loguot</Link>
    
          <Link to="/about" className={`${styles.nav__menu_about}`}>About</Link>
        
          <Link to="/home" className={`${styles.nav__menu_home}`}>Home</Link>
  
      </div>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}

export default Nav;
