import React from "react";
import styled, { ThemeConsumer } from "styled-components";
import Typewriter from "typewriter-effect";

const Title = styled.h2`
  font-size: 1em;
  text-transform: capitalize;
  width: 80%;
  color: #202020;
  align-self: flex-start;
  span {
    font-weight: 600;
    font-family: "Akaya Telivigala", cursive;
  }

  .text-1 {
    color: blue;
  }

  .text-2 {
    color: orange;
  }

  .text-3 {
    color: purple;
  }

  @media (max-width: 70em) {
    font-size: 1em;
  }

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
  }
`;
const TypeWriterText = () => {
  return (
    <Title>
      <span className="homed">Bienvenido!</span>
      <Typewriter
        options={{
          autoStart: true,
          loop: true,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString('<span class="text-1 homed">Descubre funciones</span>')
            .pauseFor(2000)
            .deleteAll()
            .typeString('<span class="text-2 homed">Crea habitaciones</span>')
            .pauseFor(2000)
            .deleteAll()
            .typeString('<span class="text-3 homed">Administra tu hotel</span>')
            .pauseFor(2000)
            .deleteAll()
            .start();
        }}
      />
    </Title>
  );
};

export default TypeWriterText;
