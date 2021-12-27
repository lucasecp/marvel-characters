import { colors } from "src/styles/colors";
import styled, { css } from "styled-components";

interface ContainerProps {
  show: Boolean;
}

export const Container = styled.aside<ContainerProps>`
  min-height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  visibility: hidden;
  position: fixed;
  top: 0;
  > nav {
    position: fixed;
    left: -100%;
    width: 60%;
    background-color: ${colors.black.strong};
    display: flex;
    flex-direction: column;
    transition: 0.3s;
    top: 0;
    min-height: 100vh;
    max-height: 100vh;
    overflow-y: auto;
    align-items: flex-start;
    > span {
      fill: #fff;
      padding: 30px 20px;
      cursor: pointer;
      stroke: #fff;
    }
    ul {
      padding: 0 20px;
      align-self: stretch;

      li {
        > a {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 0;
          color: #fff;
          font-size: 16px;
          > span {
            stroke: ${colors.red.default};
            fill: ${colors.black.strong};
          }
        }
      }
    }
  }

  @media (max-width: 539px) {
    > nav {
      width: 100%;
    }
  }
  ${({ show }) =>
    show &&
    css`
      visibility: visible;
      > nav {
        left: 0;
        transition: 0.3s;
      }
    `}
`;
