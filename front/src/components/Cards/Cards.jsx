import Card from "../Card/Card.jsx";
import styles from "./Cards.module.css";


export default function Cards(props) {
  const { characters } = props;
  return (
    <div className={`${styles.galeria_cards}`}>
      {characters.map((characters) => {
        return (
          <Card
            key={characters.name}
            name={characters.name}
            species={characters.species}
            gender={characters.gender}
            image={characters.image}
            detailId={characters.id}
            onClose={() => props.onClose(characters.id)}
          />
        );
      })}
    </div>
  );
}
