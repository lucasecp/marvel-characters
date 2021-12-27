import { colors } from "src/styles/colors";
import { spacings } from "src/styles/spacings";
import styled from "styled-components";

export const Container = styled.div`
  border-bottom: 1px solid ${colors.gray.middle};
  > div {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    max-width: ${spacings.container};
    margin: 0 auto;

    > div {
      font-size: 12px;
      text-transform: uppercase;
      font-family: "Roboto Condensed", sans-serif;
      font-weight: 700;
      color: ${colors.white.default};
      &:first-child {
        padding: 0 15px;
        border-right: 1px solid ${colors.gray.middle};
        border-left: 1px solid ${colors.gray.middle};
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      &:last-child {
        display: flex;
        > span {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 15px;
          border-right: 1px solid ${colors.gray.middle};
          stroke-width: 2px;
        }
        > div {
          display: flex;
          align-items: center;
          border-right: 1px solid ${colors.gray.middle};
          border-left: 1px solid ${colors.gray.middle};
          padding: 0 15px;
          > div {
            > span {
              text-align: center;
              font-size: 10px;
              display: block;
            }
          }

          > img {
            width: 22px;
            margin-right: 10px;
          }
        }
      }
    }
  }
`;
