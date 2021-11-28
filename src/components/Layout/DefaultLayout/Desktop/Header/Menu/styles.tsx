import { colors } from 'src/styles/colors';
import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  justify-content: center;
  >a{
      color: ${colors.white.default};
      padding: 18px;
      font-size: 12px;
      text-transform: uppercase;
      
      font-weight:700;
  }
`;
