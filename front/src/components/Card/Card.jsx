import styles from "./Card.module.css";
import { Link } from "react-router-dom";
export default function Card(props) {
  return (
    <div className={`${styles.galeria_cards__card}`}>
      <button
        className={`${styles.galeria_cards__button}`}
        onClick={() => props.onClose()}
      >
        X
      </button>
      <img src={props.image} alt="" />
      <div className={`${styles.galeria_cards__div_h2}`}>
        <Link to={`/detail/${props.detailId}`}>
        <h2 className={`${styles.galeria_cards__div_h2_name}`}>{props.name}</h2>
        </Link>
      </div>
      <div className={`${styles.galeria_cards__div_specie_gender}`}>
        <h2 className={`${styles.galeria_cards__specie}`}>Specie: {props.species}</h2>
        <h2 className={`${styles.galeria_cards__gender}`}>Gender: {props.gender}</h2>
      </div>
    </div>
  );
}
