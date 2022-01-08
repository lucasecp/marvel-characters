import React, { useState } from "react";
import Header from "./Header";
import { Container } from "./styles";
import Footer from "../shared/Footer";
import Menu from './Header/components/Menu'
interface MobileProps {}

const Mobile: React.FC<MobileProps> = ({ children }) => {
  const [headerHeight, setHeaderHeight] = useState(0);
  
  return (
    <Container headerHeight={headerHeight}>
      <Header setHeaderHeight={setHeaderHeight} />
      {children}
      <Footer />
      <Menu/>
    </Container>
  );
};

export default Mobile;
