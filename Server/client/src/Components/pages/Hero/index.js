import React from 'react';
import Navbar from '../Navbar';
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn
} from './HeroElements';


const Hero = () => {
  return (
    <HeroContainer>
      
     
      <HeroContent>
        <HeroItems>
          <HeroH1>Let's save the world together!</HeroH1>
          <HeroP>Plant a tree, Get Rewards.  </HeroP>
          <HeroBtn>Start contributing today!</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
  };

export default Hero;
