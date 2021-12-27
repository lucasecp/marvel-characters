import { colors } from "src/styles/colors";
import { spacings } from "src/styles/spacings";
import styled from "styled-components";

export const Container = styled.div`
   background: ${colors.black.strong};
  > div {
    max-width:${spacings.container};
    padding: 0 20px
  }
`;
