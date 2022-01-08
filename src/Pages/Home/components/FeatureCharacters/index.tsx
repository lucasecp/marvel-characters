import React from "react";
import { Container } from "./styles";
import CardHero from "src/components/CardHero";
import CustomTitle from "src/components/CustomTitle";

const FeatureCharacters = () => {

  return (
    <Container>
      <CustomTitle>FEATURED CHARACTERS</CustomTitle>
      <div>

      <CardHero
        name="Wanda Maximoff"
        sourceImg="https://terrigen-cdn-dev.marvel.com/content/prod/1x/012scw_ons_crd_02.jpg"
      />
      <CardHero name="Vision" sourceImg="https://terrigen-cdn-dev.marvel.com/content/prod/1x/013vis_ons_crd_01-1.jpg" />
      <CardHero
        name="Capitain America"
        nameSuperHero="Sam wilson"
        sourceImg="https://terrigen-cdn-dev.marvel.com/content/prod/1x/cap_ons_crd_01.jpg"
      />
      <CardHero
        name="Winter Soldier"
        nameSuperHero="Bucky Barnes"
        sourceImg="https://terrigen-cdn-dev.marvel.com/content/prod/1x/015wsb_ons_crd_03.jpg"
      />
      <CardHero
        name="Black Window"
        nameSuperHero="Natasha Romanoff"
        sourceImg="https://terrigen-cdn-dev.marvel.com/content/prod/1x/011blw_ons_crd_04.jpg"
      />
      <CardHero name="Loki" sourceImg="https://terrigen-cdn-dev.marvel.com/content/prod/1x/017lok_ons_crd_03.jpg" />
      </div>
    </Container>
  );
};

export default FeatureCharacters;
