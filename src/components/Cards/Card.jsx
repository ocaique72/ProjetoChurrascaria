import styles from './card.module.css'
import Button from '../buttons/Button'

export function Card(props) {
  return (
    <div className={styles.card}>
      <img src={props.img} alt="" />
      <div>
        
        <h3>{props.cardTitle}</h3>
        <p>{props.cardDescription}</p>
        <Button text='Saber mais ' />
      </div>
    </div>
  );
}

export function CardInverted(props) {
  return (
    <div className={styles.cardInverted}>

      <img src={props.img} alt="" />

      <div>
      <h3>{props.cardTitle}</h3>
        <p>{props.cardDescription}</p>

        <Button text='Saber mais ' />
      </div>
      
    </div>
  );
}
