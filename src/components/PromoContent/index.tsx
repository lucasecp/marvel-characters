import React from "react";
import { Container } from "./styles";

interface PromoContentProps {}

const PromoContent: React.FC<PromoContentProps> = ({ children }) => {
  return (
    <Container>
      <div>{children}</div>
    </Container>
  );
};

export default PromoContent;
