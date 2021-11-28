import React from "react";
import { Container } from "./styles";
import { ReactComponent as LogoIcon } from "../../../../../../assets/icons/logo.svg";
import { ReactComponent as MagnifyingGlassIcon } from "../../../../../../assets/icons/magnifying-glass.svg";

const TopHeader: React.FC<any> = () => {
  return (
    <Container>
      <div>
        <div>Lucas</div>

        <div>
          <LogoIcon />
        </div>

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
