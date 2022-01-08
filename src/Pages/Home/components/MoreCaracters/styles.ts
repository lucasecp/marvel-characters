import { spacings } from "src/styles/spacings";
import styled from "styled-components";

export const Container = styled.div`
  max-width: ${spacings.container};
  padding: 10px 20px 0 20px;
  margin: 0 auto;
 
  > div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15.82%, 1fr));
    justify-content: center;
    gap: 10px;
    @media (max-width: 890px) {
      grid-template-columns: repeat(auto-fit, minmax(23.75%, 1fr));
    }
    @media (max-width: 767px) {
      grid-template-columns: repeat(auto-fit, minmax(31.75%, 1fr));
    }
    @media (max-width: 390px) {
      grid-template-columns: 100%;
    }
  }
`;
