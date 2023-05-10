import React from 'react'
import styled from 'styled-components'

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
        <a >K </a>
        <i class="fas fa-h-square"></i>
        <a> O P</a>
        
        
    </LogoText>
  )
}

export default Logo