import styles from "./Form.module.css";
import { useState } from "react";
import validation from "./validation";


function Forms(props) {
  const [userData, setUserData] = useState({ username: '', password: '' }); 
  const [erros, setErros] = useState({ username: '', password: '' }); 
  
  const handleInputChange = (event) =>{
    
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    })

    setErros(validation({
      ...userData,
      [event.target.name]: event.target.value,
    }))
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(userData);
  };

  return (
    <div className={`${styles.form}`}>
      <form onSubmit={handleSubmit}>
        <div className={`${styles.form__label_inputs}`}>
          <div className={`${styles.form__label_username}`}>
            <label htmlFor="username">Username: </label>
            <input  onChange={handleInputChange} type="text" name="username" value={userData.username} autoComplete="off"/>
          </div>
          {erros.username && <p>{erros.username}</p>}
          <div className={`${styles.form__label_password}`}>
            <label htmlFor="password">Password: </label>
            <input  onChange={handleInputChange} type="password" name="password" value={userData.password}/>
          </div>
          {erros.password && <p>{erros.password}</p>}
          <div>
          <button type="submit">Login</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Forms;