import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import apiMarvel from "src/services/api";
import { queryCredentials } from "src/services/credentials";

const FeatureCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getComics = async () => {
      try {
        const { data } = await apiMarvel.get(
          `/v1/public/characters${queryCredentials}`
        );
        setCharacters(data.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    getComics();
  }, []);
  return <Container>
    
  </Container>;
};

export default FeatureCharacters;
