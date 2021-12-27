import React from "react";
import { Container } from "./styles";
import { useState } from "react";
import Mobile from "./Mobile";
import Desktop from "./Desktop";

interface DefaultLayoutProps {}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  const [isMobile, setIsMobile] = useState<Boolean>(
    window.matchMedia("(max-width: 767px)").matches
  );

  window.addEventListener("resize", () =>
    setIsMobile(window.matchMedia("(max-width: 767px)").matches)
  );
  
  return (
    <Container>
      {isMobile ? (
        <Mobile children={children} />
      ) : (
        <Desktop children={children} />
      )}
    </Container>
  );
};

export default DefaultLayout;
