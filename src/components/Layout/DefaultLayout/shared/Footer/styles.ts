import { colors } from "src/styles/colors";
import { spacings } from "src/styles/spacings";
import styled from "styled-components";

export const Container = styled.footer`
  background: ${colors.black.light};
  padding: 80px 0px 30px 0px;
  > div {
    display: flex;
    justify-content: center;
    max-width: ${spacings.container};
    margin: 0 auto;
    padding: 0 20px;
    flex-wrap: wrap;
    > span {
      display: block;
      width: 79px;
      margin-right: 60px;
    }
    > section {
        >img{
            width: 55px;
        }
      > nav {
        display: flex;
        flex-direction: column;
        margin-right: 60px;
        > a {
          font-weight: 700;
          font-size: 13px;
          font-family: "Roboto", sans-serif;
          color: #fff;
          margin-bottom: 12px;
        }
      }
    }
  }
`;
