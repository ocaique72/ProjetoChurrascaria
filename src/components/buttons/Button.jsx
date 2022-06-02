import styles from "./button.module.css";
import {FiChevronsRight} from 'react-icons/fi'

function Button(props) {
  return (
    <>
      <button type="button" className={styles.buttonSaberMais}>
        {props.text}  <FiChevronsRight/>
      </button>
    </>
  );
}

export default Button;
