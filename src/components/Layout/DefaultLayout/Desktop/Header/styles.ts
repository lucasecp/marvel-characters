import { colors } from "src/styles/colors";
import styled from "styled-components";

export const Container = styled.div`
  background: ${colors.black.light};
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  > h5 {
    color: #fff;
    margin-right: 10px;
    font-weight: 400;
    font-size: 14px;
  }
`;
