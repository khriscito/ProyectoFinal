import React,{useState} from 'react'
import Logo from './Logo'
import styled from 'styled-components'
import Button from './Button'
const Section = styled.section`
width:100vw;



`
const Navbar = styled.nav`
display:flex;
justify-content:space-between;
align-items: center;
width:85%;
height:5rem;
margin:0 auto;
font-family: 'Lato', sans-serif;
font-weight: bold;

.mobile{
  display:none;
}
@media(max-width:64em){
.desktop{
  display:none;
}
.mobile{
  display:inline-block;
}
}

`
const Menu = styled.ul`
display: flex;
justify-content:space-between;
align-items:center;
list-style:none;

@media (max-width: 64em){


position:fixed;
top: '5rem';
left:0;
right:0;
bottom:0;
width: 100vw;
height: ${props => `calc(100vh - 5rem)`};
z-index:50;
background-color: ${props => `rgba(255,255,255,0.85)`};
backdrop-filter:blur(2px);

transform: ${props=> props.click ? 'translateY(0)' : `translateY(100%)`};
transition: all 0.3s ease;
flex-direction:column;
justify-content:center;

}
`

const MenuItem = styled.li`
margin: 0 1rem;
color: #fafbfd;
cursor: pointer;


&::after{
  content: '';
  display:block;
  width: 0%;
  height: 2px;
  background: #fafbfd;
  transition: width 0.3s ease;
}
&:hover::after{
  width:100%;
}

@media (max-width: 64em){
margin: 1rem 0;

&::after{
  display:none;
}
}

`
const HamburgerMenu = styled.span`
width:${props => props.click ? '2rem' : '1.5rem'};
height:2px;
background: #202020;
position:absolute;
top:2rem;
left:50%;
transform:${props => props.click ? 'translateX(-50%) rotate(90deg)': 'translateX(-50%) rotate(0)'};

display:none;
justify-content:center;
align-items:center;
cursor:pointer;
transition: all 0.3s ease;

@media (max-width: 64em){
  display:flex;
}

&::after, &::before{
  content:'';
  width:  ${props => props.click ? '1rem' : '1.5rem'};
  height:2px;
  right: ${props => props.click ? '-2px' : '0'};
  background: #202020;
  position:absolute;
  transition: all 0.3s ease;

}

&::after{
  top: ${props => props.click ? '0.3rem' : '0.5rem'};
  transform:${props => props.click ? 'rotate(-40deg)' : 'rotate(0)'} ;
}
&::before{
  bottom: ${props => props.click ? '0.3rem' : '0.5rem'};
  transform:${props => props.click ? 'rotate(40deg)' : 'rotate(0)'} ;
}
`

const Navigation = () => {
  
  const[click,setClick]= useState(false)

  const scrollTo = (id) => {
    let element = document.getElementById(id);
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })

    setClick(!click);


  }
  return (
    <Section>
        <Navbar>
            <Logo />
            <HamburgerMenu click={click} onClick={()=> setClick(!click)}>&nbsp;</HamburgerMenu>
            <Menu click={click}>
              <MenuItem onClick={()=> scrollTo('home')}>Home</MenuItem>
              <MenuItem onClick={()=> scrollTo('services')}>About</MenuItem>
              <MenuItem onClick={()=> scrollTo('portfolio')}>Partners</MenuItem>
              <MenuItem onClick={()=> scrollTo('team')}>Team</MenuItem>
              <MenuItem>
              <div className="mobile">
              <Button text="Log In" link=""/>
              </div>
              
              </MenuItem>
            </Menu>
            <div className="desktop">
            <Button text="Log In" link=""/>
            </div>
        </Navbar>
    </Section>
  )
}

export default Navigation