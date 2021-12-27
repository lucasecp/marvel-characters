import React from "react";
import PromoContent from "src/components/PromoContent";
import Menu from "./Menu";

import { Container, Content } from "./styles";
import TopHeader from "./TopHeader/index";

const Header: React.FC<any> = () => {
  return (
    <>
      <Container>
        <TopHeader />
        <Menu />
      </Container>
      <PromoContent>
        <Content>
          <h5>Rewards your marvel fandom with</h5>
          <img
            src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/insiderlogo_h72_navpipe-thin-variant-promo.png"
            alt="rewards"
          ></img>
        </Content>
      </PromoContent>
    </>
  );
};

export default Header;
