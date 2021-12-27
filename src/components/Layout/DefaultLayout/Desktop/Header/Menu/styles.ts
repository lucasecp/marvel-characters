import { colors } from "src/styles/colors";
import { spacings } from "src/styles/spacings";
import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  display: flex;
  justify-content: center;
  max-width: ${spacings.container};
  margin: 0 auto;
  padding: 0 20px;
  > a {
    color: ${colors.white.default};
    padding: 18px;
    font-size: 12px;
    text-transform: uppercase;

    font-weight: 700;
    letter-spacing: 1px;
  }
`;
