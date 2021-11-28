import React from "react";
import Menu from "./Menu";

import { Container } from "./styles";
import TopHeader from './TopHeader/index';

const Header: React.FC<any> = () => {
  return (
    <Container>
      <TopHeader/>
      <Menu />
    </Container>
  );
};

export default Header;
