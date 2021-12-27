import React from "react";
import Header from "./Header";
import { Container } from "./styles";
import Footer from "./Footer";
import Menu from './Header/components/Menu'
interface MobileProps {}

const Mobile: React.FC<MobileProps> = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
      <Menu/>
    </Container>
  );
};

export default Mobile;
