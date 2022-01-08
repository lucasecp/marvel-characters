import React, { useEffect, useRef } from "react";
import PromoContent from "src/components/PromoContent";
import TopHeader from "./components/TopHeader";

import { Container, Content } from "./styles";

interface HeaderProps {
  setHeaderHeight: (height: number) => void;
}

const Header: React.FC<HeaderProps> = ({ setHeaderHeight }) => {
  const header = useRef<HTMLHeadingElement>(null);


  useEffect(() => {
    if (header) {
      setHeaderHeight(header.current?.offsetHeight || 0);
    }
  }, [header, setHeaderHeight]);

  return (
    <>
      <Container  ref={header}>
        <TopHeader />
      </Container>
      <PromoContent>
        <Content>
          <h5>Join now</h5>
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
