import React from "react";
import { Container, Figure, TextGroup } from './styles';

const TopSection = () => {
  return (
    <Container>
      <TextGroup>
      <h1>Marvel Characters</h1>
      <p>
        Get hooked on a hearty helping of heroes and villains from the humble
        House of Ideas!
      </p>
      </TextGroup>
      <Figure>
        <div />
      </Figure>
    </Container>
  );
};

export default TopSection;
