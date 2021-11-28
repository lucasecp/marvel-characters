import React from "react";
import Header from "./Header";
import { Container } from "./styles";
import Footer from "./Footer";

interface MobileProps {}

const Mobile: React.FC<MobileProps> = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
};

export default Mobile;
