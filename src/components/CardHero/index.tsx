import React from "react";
import { Container } from "./styles";

interface CardHeroProps {
  name?: string;
  nameSuperHero?: string;
  sourceImg?: string;
}

const CardHero: React.FC<CardHeroProps> = ({
  name,
  nameSuperHero,
  sourceImg,
}) => {
  return (
    <Container>
      <header>
        <img src={sourceImg} alt="hero" />
      </header>
      <footer>
          <h4>{name}</h4>
          <p hidden={!nameSuperHero}>{nameSuperHero}</p>
      </footer>
    </Container>
  );
};

export default CardHero;
