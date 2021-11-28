import React from "react";
import Header from "./Header";
import { Container } from "./styles";
import Footer from './Footer';

interface DesktopProps {}

const Desktop: React.FC<DesktopProps> = ({ children }) => {
  return <Container>
      <Header/>
      {children}
      <Footer/>
  </Container>;
};

export default Desktop;
