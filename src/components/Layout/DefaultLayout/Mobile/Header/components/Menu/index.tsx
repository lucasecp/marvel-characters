import React from "react";
import { NavLink } from "react-router-dom";
import { useMenu } from "src/context1/useMenu";
import { Container } from "./styles";
import { ReactComponent as CloseIcon } from "../../../../../../../assets/icons/close.svg";
import { ReactComponent as ArrowRightIcon } from "../../../../../../../assets/icons/arrow-right-menu.svg";

const Menu: React.FC<{}> = () => {
  const { showMenu, closeMenu } = useMenu();

  return (
    <Container
      show={showMenu}
      onClick={(e) => e.target === e.currentTarget && closeMenu()}
    >
      <nav>
        <span onClick={closeMenu}>
          <CloseIcon />
        </span>
        <ul>
          <li>
            <NavLink to="#">
              Videos
              <span>
                <ArrowRightIcon />
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="#">
              Characters
              <span>
                <ArrowRightIcon />
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="#">
              Comics
              <span>
                <ArrowRightIcon />
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="#">
              Movies
              <span>
                <ArrowRightIcon />
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="#">
              Tv Shows
              <span>
                <ArrowRightIcon />
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="#">
              Games
              <span>
                <ArrowRightIcon />
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="#">
              News
              <span>
                <ArrowRightIcon />
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="#">
              More
              <span>
                <ArrowRightIcon />
              </span>
            </NavLink>
          </li>
         
          
        </ul>
      </nav>
    </Container>
  );
};

export default Menu;
