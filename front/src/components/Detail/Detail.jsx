import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";

const Detail = () => {
  const { detailId } = useParams(); // obtenemos parte de la ruta en este caso detailId
  const [character, setCharacter] = useState({});

  useEffect(() => {
    //`https://rickandmortyapi.com/api/character/${detailId}`
    fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);
  return (
    <div>
      <button>
        <Link to="/home">Back</Link>
      </button>
      <h1>{character?.name}</h1>
      <p>{character?.status}</p>
      <p>{character?.species}</p>
      <p>{character?.gender}</p>
      <img src={character?.image} alt={character.name} />
    </div>
  );
};

export default Detail;
