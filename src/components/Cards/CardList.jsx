import { Card,  } from "./Card";
import meatImg from "../assets/image/meats.jpg";
import juiceImg from "../assets/image/juiceImg.jpg";
import cake from "../assets/image/cake.jpg";
import steaks from '../assets/image/steaks.jpg'

function CardList() {
  return (
    <section>
      <Card
        img={steaks}
        cardTitle="PRATOS DIVERSOS"
        cardDescription="Você escolhe o ponto da carne e a variedades de acompanhamentos com os melhores temperos."
      />

      <Card
        img={meatImg}
        cardTitle="CARNES DE QUALIDADE"
        cardDescription="Contamos com uma variedade de mais de 20 cortes de carnes frescas e selecionadas. Preparados na brasa no ponto que você escolher."
      />

      <Card 
      img={juiceImg}
      cardTitle='NOSSOS DRINKS'
      cardDescription='Prove nossos drinks. São mais de 60 opções de drinks, sucos batidas, cachaças, whisky, vinhos e licores, tudo para você ter a melhor experiencia.'
      />

      <Card
        img={cake}
        cardTitle="SOBREMESAS"
        cardDescription="Deliciosa variedade de sobremesas para todos os gostos, dight, light e para diabeticos."
      />
    </section>
  );
}

export default CardList;
