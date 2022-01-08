import { colors } from "src/styles/colors";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 210px minmax(145px, auto);
  cursor: pointer;
  :hover {
    > footer::before {
      height: 100%;
      transition: 0.3s;
    }
    > header > img {
      transform: scale(1.1);
      transition: 0.3s;
    }
  }
  > header {
    overflow: hidden;
  > img {
    transition: 0.3s;
    min-height: 100%;
  }
}
  > footer {
    background-color: ${colors.black.strong};
    padding: 16px 24px 17px 20px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 100%;
    position: relative;
    ::before {
      content: "";
      display: block;
      position: absolute;
      background: ${colors.red.default};
      height: 4px;
      width: 100%;
      top: 0;
      left: 0;
      transition: 0.3s;
    }
    ::after {
      border-bottom-color: transparent;
      border-left-color: transparent;
      border-right-color: #fff;
      border-style: solid;
      border-top-color: transparent;
      border-width: 12px 12px 0 0;
      bottom: 0;
      content: "";
      position: absolute;
      right: 0;
      top: auto;
    }

    > h4 {
      color: #fff;
      font-size: 16px;
      font-family: "Roboto Condensed", sans-serif;
      z-index: 1;
    }
    > p {
      color: ${colors.gray.middle};
      font-size: 12px;
      font-family: "Roboto Condensed", sans-serif;
      z-index: 1;
    }
  }
`;
