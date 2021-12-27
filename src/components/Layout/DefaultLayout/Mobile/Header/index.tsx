import React from "react";
import PromoContent from "src/components/PromoContent";
import TopHeader from "./components/TopHeader";

import { Container, Content } from "./styles";

const Header: React.FC<any> = () => {
  return (
    <Container>
      <TopHeader />
      <PromoContent>
        <Content>
          <h5>Join now</h5>
          <img
            src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/insiderlogo_h72_navpipe-thin-variant-promo.png"
            alt="rewards"
          ></img>
        </Content>
      </PromoContent>
    </Container>
  );
};

export default Header;
