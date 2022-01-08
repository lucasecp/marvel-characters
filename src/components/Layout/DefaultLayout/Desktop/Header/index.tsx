import React, { useRef, useState } from "react";
import PromoContent from "src/components/PromoContent";
import Menu from "./Menu";

import { Container, Content } from "./styles";
import TopHeader from "./TopHeader/index";
import { useEffect } from "react";

interface HeaderProps {
  setHeaderHeight: (height: number) => void;
}

const Header: React.FC<HeaderProps> = ({ setHeaderHeight }) => {
  const header = useRef<HTMLHeadingElement>(null);

  const [headerIsFixed, setHeaderIsFixed] = useState<boolean>(false);

  useEffect(() => {
    if (header) {

      setHeaderHeight(header.current?.offsetHeight || 0);

      window.addEventListener("scroll", function () {        
        if (
          header.current?.offsetHeight &&
          this.scrollY > header.current?.offsetHeight
        ) {
         return setHeaderIsFixed(true);
        }
        setHeaderIsFixed(false);
      });
    }
  }, [header, setHeaderHeight]);

  return (
    <>
      <Container ref={header} >
        <TopHeader isFixed={headerIsFixed}/>
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
