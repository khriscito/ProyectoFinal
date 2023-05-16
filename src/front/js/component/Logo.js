import React from 'react'
import styled from 'styled-components'
import logo from "../../img/logo.png"

const LogoText = styled.h1`
font-family: 'Akaya Telivigala', cursive;
font-size: 1.25em;
color: #fafbfd;
transition: all 0.2s ease;


&:hover{
    transform: scale(1.1);
}

`

const Logo = () => {
  return (
    <LogoText>
<div className="w-50 h-50 align-text-center d-flex">
<img src={logo} alt="Logo" />
</div>
    </LogoText>
  )
}

export default Logo