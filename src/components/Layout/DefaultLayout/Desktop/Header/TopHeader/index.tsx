import React from "react";
import { Container,Logo } from "./styles";
import { ReactComponent as LogoIcon } from "../../../../../../assets/icons/logo.svg";
import { ReactComponent as LogoMIcon } from "../../../../../../assets/icons/logoM.svg";
import { ReactComponent as MagnifyingGlassIcon } from "../../../../../../assets/icons/magnifying-glass.svg";

const TopHeader: React.FC<any> = ({ isFixed }) => {
  console.log(isFixed);
  
  return (
    <Container>
      <div>
        <div>Lucas</div>

        <Logo logo={isFixed ? 'M' : 'Full'}>{isFixed ? <LogoMIcon /> : <LogoIcon />}</Logo>

        <div>
          <div>
            <img
              src="https://i.annihil.us/u/prod/marvel/images/mu/web/2021/icon-mu-shield.png"
              alt=""
            />

            <div>
              <p>Marvel Unlimited</p>
              <span>Subscribe</span>
            </div>
          </div>
          <span>
            {" "}
            <MagnifyingGlassIcon />
          </span>
        </div>
      </div>
    </Container>
  );
};

export default TopHeader;
