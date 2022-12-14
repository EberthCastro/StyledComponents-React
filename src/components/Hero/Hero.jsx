import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, MainHeading } from "../../styles/Home.Styles";
import {
  HeroVideo,
  HeroSection,
  HeroText,
  ButtonWrapper,
  HeroButton,
} from "./Hero.Styles";

function Hero() {
  return (
    <HeroSection>
      <HeroVideo src="./assets/hero.mp4" autoPlay muted/>
      <Container>
        <MainHeading>Your data is secured with us</MainHeading>
        <HeroText>
          We provide the best security systems for clients all over the world.
        </HeroText>
        <ButtonWrapper>
          <Link to="signup">
            <Button>Get Started</Button>
          </Link>
          <HeroButton>Find More</HeroButton>
        </ButtonWrapper>
      </Container>
    </HeroSection>
  );
}

export default Hero;
