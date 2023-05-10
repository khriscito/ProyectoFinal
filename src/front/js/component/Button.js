import React from 'react'
import styled from 'styled-components'

const Btn = styled.button`
display:inline-block;
background-color: #fafbfd;
color:#fff;
outline:none;
border:none;

font-size: 0.875em;
font-weight: bold;
padding: 0.9rem 2.3rem;
border-radius: 10px;
cursor: pointer;
transition: all 0.2s ease;
position: relative;

&:hover{
    transform: scale(0.9);
    font-weight: bold;
}


&::after {
    content: '';
    position: absolute;
    top: 50%;
    left:50%;
    transform: translate(-50%,-50%) scale(0);
    border: 1px solid #fafbfd;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    transition: all 0.2s ease;
    font-weight: bold;
}

&:hover::after{
    transform: translate(-50%,-50%) scale(1.1);
    padding: 1.5rem;
}

`

const Button = ({text,link}) => {
  return (
    <Btn>
        <a href={link} aria-label={text} target="_blank" rel="noreferrer">
            {text}
        </a>
    </Btn>
  )
}

export default Button