import { colors } from "src/styles/colors";
import { spacings } from "src/styles/spacings";
import styled from "styled-components";

interface LogoProps {
  logo: string;
}

export const Logo = styled.div<LogoProps>`
  min-height: 52px;

  min-width: ${({ logo }) => (logo === "Full" ? "130px" : "52px")};
  > svg {
    max-height: ${({ logo }) => (logo === "Full" ? "130px" : "52px")};
  }
`;

export const Container = styled.div`
  border-bottom: 1px solid ${colors.gray.strong};
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
        border-right: 1px solid ${colors.gray.strong};
        border-left: 1px solid ${colors.gray.strong};
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
          border-right: 1px solid ${colors.gray.strong};
          stroke-width: 2px;
        }
        > div {
          display: flex;
          align-items: center;
          border-right: 1px solid ${colors.gray.strong};
          border-left: 1px solid ${colors.gray.strong};
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
