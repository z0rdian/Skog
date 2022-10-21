import React from 'react';
import Header from '../common/Header';
import HeroArea from './HeroArea';

const HeroContainerArea = () => {
  return (
    <div className='videoContainer'>
      <video src={require('../assets/videoBg.webm')} autoPlay loop muted />
        <Header className="nav-header-container" />
        <HeroArea className="hero-container" />
    </div>
  )
}
export default HeroContainerArea;


