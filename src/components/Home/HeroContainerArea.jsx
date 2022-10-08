import React from 'react';
import Header from '../common/Header';
import videoBg from '../assets/videoBg.mp4'
import HeroArea from './HeroArea';

const HeroContainerArea = () => {
  return (
    <div className='videoContainer'>
        <video autoPlay loop muted id="videoBG" src={videoBg} />
        <Header className="nav-header-container" />
        <HeroArea className="hero-container" />
        
    </div>
  )
}
export default HeroContainerArea;


