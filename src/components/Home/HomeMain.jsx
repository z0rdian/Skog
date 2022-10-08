import React from 'react';
import BrandArea from '../common/BrandArea';
import Footer from '../common/Footers/Footer';
import Header from '../common/Header';
import AboutArea from './AboutArea';
import BlogArea from './BlogArea';
import Cta from './Cta';
import HeroArea from './HeroArea';
import ProjectArea from './ProjectArea';
import ProjectArea2 from './ProjectArea2';
import ServicesArea from './ServicesArea';
import Testimonial from './Testimonial';
import ServicesFive from './ServicesFive';
import BioArea from './BioArea';
import HeroContainerArea from './HeroContainerArea';

const HomeMain = () => {
  return (
    <>
      <HeroContainerArea />
      {/* <Header/>
      <HeroArea/> */}
      <BioArea />
      <ServicesFive />
      {/* <AboutArea/> */}
      {/* <ServicesArea/> */}
      <ProjectArea/>
      {/* <Testimonial/> */}
      {/* <BrandArea/> */}
      <ProjectArea2 />
      {/* <BlogArea/> */}
      <Cta/>
      <Footer/>
    </>
  );
};

export default HomeMain;