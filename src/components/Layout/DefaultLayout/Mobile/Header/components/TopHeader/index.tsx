import React from "react";
import { Container } from "./styles";
import { ReactComponent as LogoIcon } from "../../../../../../../assets/icons/logo.svg";
import { ReactComponent as MagnifyingGlassIcon } from "../../../../../../../assets/icons/magnifying-glass.svg";
import { ReactComponent as HamburgerIcon } from "../../../../../../../assets/icons/hamburger.svg";
import { useMenu } from "src/Context/useMenu";

const TopHeader: React.FC<any> = () => {
  const { openMenu } = useMenu();

  return (
    <Container>
      <div>
        <span onClick={openMenu}>
          <HamburgerIcon />
        </span>

        <LogoIcon />

        <MagnifyingGlassIcon />
      </div>
    </Container>
  );
};

export default TopHeader;
