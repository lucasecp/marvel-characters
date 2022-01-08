import styled from "styled-components";
interface ContainerProps {
  headerHeight: number;
}

export const Container = styled.div<ContainerProps>`
  padding-top: ${({ headerHeight }) => headerHeight + "px"};
`;
