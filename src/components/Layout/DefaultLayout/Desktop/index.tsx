import React, { useState } from "react";
import Header from "./Header";
import { Container } from "./styles";
import Footer from "../shared/Footer";

interface DesktopProps {}

const Desktop: React.FC<DesktopProps> = ({ children }) => {
  const [headerHeight, setHeaderHeight] = useState(0);

  return (
    <Container headerHeight={headerHeight}>
      <Header setHeaderHeight={setHeaderHeight} />
      {children}
      <Footer />
    </Container>
  );
};

export default Desktop;
