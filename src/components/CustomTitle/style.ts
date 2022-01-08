import { colors } from 'src/styles/colors';
import styled from 'styled-components';

export const Container = styled.h3`
   color: ${colors.black.middle};
    font-size: 26px;
    margin: 26px 0;
    font-family: "RobotoCondensed", sans-serif;
    letter-spacing: 1px;
    position: relative;
    text-transform: uppercase;
    &::after {
      background-color: #c6a972;
      content: "";
      display: block;
      height: 2px;
      position: absolute;
      transform: rotate(-45deg) skewX(45deg);
      width: 20px;
      left: 10px;
      bottom:-10px
    }
    &::before {
      background-color: #c6a972;
      content: "";
      display: block;
      height: 2px;
      position: absolute;
      transform: rotate(-45deg) skewX(45deg);
      width: 20px;
      left: 60px;
      top:-10px
    }
`;
