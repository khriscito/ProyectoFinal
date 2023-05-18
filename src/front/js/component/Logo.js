import React from "react";
import styled from "styled-components";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";
const LogoText = styled.h1`
  font-family: "Akaya Telivigala", cursive;
  font-size: 1.25em;
  color: #fafbfd;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const Logo = () => {
  return (
    <LogoText>
      <div className="w-50 h-50 align-text-center d-flex">
        <Link to="/">
          <img className="contain" src={logo} alt="Logo" />
        </Link>
      </div>
    </LogoText>
  );
};

export default Logo;
