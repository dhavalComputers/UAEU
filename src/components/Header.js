import React, { useState } from "react";
import styled from "styled-components";
import logo from "../images/header/logo.png";
import bigLogo from "../images/header/bigLogo.png";
import starrating from "../images/header/starrating.png";
import smile from "../images/header/smile.png";
import LineVerticle1 from "../images/header/LineVerticle.png";
import fonts from "../images/header/fonts.png";
import user from "../images/header/user.png";
import search from "../images/header/search.png";
import menu from "../images/header/menu.png";

// const [classList, setclassList] = useState(null);

// var navbar = document.class("topNav");

function Header() {
  return (
    <Nav className="topNav">
      <LogoSec>
        <Logo src={logo} />
      </LogoSec>
      <BigLogo>
        <Logo1 src={bigLogo} />
      </BigLogo>
      <StarImg src={starrating} />

      <NavMenu>
        <a>
          <img src={smile} />
        </a>
        <Apply>APPLY</Apply>
        <LineVerticle src={LineVerticle1} />
        <Eservices>E-SERVICES</Eservices>
        <Fonts src={fonts} />
        <a>
          <img src={user} />
        </a>
        <a>
          <img src={search} />
        </a>
      </NavMenu>

      <UserImg src={menu} />
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: #0529428a;
  display: flex;
  align-items: center;
  padding: 0px;
  z-index: 11;
  padding-right: 25px;
  position: fixed;
  top: 0px;
`;
const LogoSec = styled.div`
  width: 12%;
  background: #ef5151;
  height: 100%;
`;
const Apply = styled.a`
  background: #f04b4b;
  height: 100%;
  color: #fff;
  padding: 4px 16px !important;
  margin: 19px 5px;
`;
const Logo = styled.img`
  width: 70%;
  padding: 21px 0px;
  margin-left: 14%;
`;

const BigLogo = styled.div`
  width: 20%;
  background: #e4e5e5;
  height: 100%;
`;
const Logo1 = styled.img`
  width: 83%;
  padding: 19px 0px;
  margin-left: 9%;
`;
const LineVerticle = styled.img`
  height: 50%;
  padding: 16px 10px;
  padding-right: 0;
`;
const Fonts = styled.img`
  width: 34%;
  padding: 16px 10px;
`;
const Eservices = styled.a`
  color: #fff;
`;
const StarImg = styled.img`
  width: 4%;
  margin: 5px 25px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-item: center;
  justify-content: flex-end;
  margin-right: 20px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  width: 28px;
  height: 28px;
  cursor: pinter;
`;
