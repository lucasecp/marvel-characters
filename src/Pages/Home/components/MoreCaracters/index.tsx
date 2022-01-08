import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import apiMarvel from "src/services/api";
import { queryCredentials } from "src/services/credentials";
import CardHero from "src/components/CardHero";
import CustomTitle from "src/components/CustomTitle";

const MoreCaracters = () => {
  const [characters, setCharacters] = useState<any[]>([]);

  useEffect(() => {
    const getComics = async () => {
      try {
        const { data } = await apiMarvel.get(
          `/v1/public/characters${queryCredentials}&limit=18&offset=295`
        );
        setCharacters(data.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    getComics();
  }, []);

  return (
    <Container>
      <CustomTitle>More MARVEL CHARACTERS</CustomTitle>
      <div>
        {characters.map((character) => (
          <CardHero
          key={character.id}
            name={character.name}
            sourceImg={
              character.thumbnail.path + "." + character.thumbnail.extension
            }
          />
        ))}
      </div>
    </Container>
  );
};

export default MoreCaracters;
