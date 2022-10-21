import React from 'react';
import Header from '../common/Header';
import HeroArea from './HeroArea';
import videoBg from '../assets/videoBg.mp4'

const HeroContainerArea = () => {
  return (
    <div className='videoContainer'>
      <video src={videoBg } autoPlay loop muted />
        <Header className="nav-header-container" />
        <HeroArea className="hero-container" />
    </div>
  )
}
export default HeroContainerArea;


