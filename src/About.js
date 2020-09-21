import React from 'react';
import Common from '../src/Common';
import StartPic from '../src/images/StartPic.jpg';

const About = () => {
  return(
   <>
   <Common
      name="Welcome back to about page "
      imgsrc={StartPic}
      visit='/contact'
      btname="Contact Now"
   />
   </>
  )
}

export default About;