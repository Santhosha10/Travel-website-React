import React from 'react';
import '../../App.css';
import { Button } from './Button';
import '../Styles/HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='img\videoBg (1).mp4' autoPlay  muted loop />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you Waiting For??</p>
      <div className='hero-btns'> 
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          WATCH TRAILER
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
