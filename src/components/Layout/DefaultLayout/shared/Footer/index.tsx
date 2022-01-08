import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";
import { ReactComponent as LogoMIcon } from "src/assets/icons/logoM.svg";

const Footer: React.FC<any> = () => {
  return (
    <Container>
      <div>
        <span>
          <LogoMIcon />
        </span>
        <section>
          <nav>
            <Link to="#">ABOUT</Link>
            <Link to="#">MARVEL</Link>
            <Link to="#">HELP/FAQS</Link>
            <Link to="#">CAREERS</Link>
            <Link to="#">INTERNSHIPS</Link>
          </nav>
        </section>
        <section>
          <nav>
            <Link to="#">ADVERTISING</Link>
            <Link to="#">DISNEY+</Link>
            <Link to="#">MARVELHQ.COM</Link>
            <Link to="#">REDEEM</Link>
            <Link to="#">DIGITAL</Link>
            <Link to="#">COMICS</Link>
          </nav>
        </section>
        <section>
          <img
            src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/marvel_insider-topnav-logo-large2x.png"
            alt=""
          />
          <img
            src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/mu-logo-w-nav-2x-2021-02.png"
            alt=""
          />
        </section>
      </div>
    </Container>
  );
};

export default Footer;
