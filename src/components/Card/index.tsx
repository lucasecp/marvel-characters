import React from "react";
import { Container, HeroInfo } from "./styles";

interface CardProps {
  isFill?: Boolean;
  name?: string;
  nameSuperHero: string;
  sourceImg?: string;
}

const Card: React.FC<CardProps> = ({
  isFill,
  name,
  nameSuperHero,
  sourceImg,
}) => {
  return (
    <Container>
      <header>
        <img src={sourceImg} alt='hero' />
      </header>
      <HeroInfo isFill={isFill}>
        <h4>{name}</h4>
        <p>{nameSuperHero}</p>
      </HeroInfo>
    </Container>
  );
};

export default Card;
