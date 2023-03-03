import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav"; 
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";


function App() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();

  const [access, setAccess] = useState(false);

  const username = 'cesar@gmail.com';
  const password = '123Cesar!';
  const navigate = useNavigate();


  const login = (userData) => {
    if(userData.username === username && userData.password === password){
      setAccess(true);
      navigate("/home");
    }
  }

  useEffect(() => {
    !access && navigate('/');
  }, [access]);
  
  function onSearch(character) {
    fetch(`http://localhost:3001/rickandmorty/onsearch/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        }else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }
  const onClose = (id) => {
    setCharacters(characters.filter((characters) => characters.id !== id));
  };
  return (
    <div className="App" style={{ padding: "25px" }}>
        {location.pathname === '/' ? <Form login={login}/> : <Nav onSearch = {onSearch}/>}
      <Routes>
        <Route path="/home"element={<Cards characters={characters} onClose={onClose} />}/>
        <Route path="/about" element={<About />}></Route>
        <Route path="/detail/:detailId" element={<Detail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
