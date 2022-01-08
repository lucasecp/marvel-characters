import { colors } from "src/styles/colors";
import { spacings } from "src/styles/spacings";
import styled from "styled-components";

export const Container = styled.div`
   background: ${colors.black.middle};
  > div {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: ${spacings.container};
    margin: 0 auto; 
    > span {
      fill: #fff;
      cursor: pointer;
    }
    > div{
      width: 36px
    }
  }
`;
