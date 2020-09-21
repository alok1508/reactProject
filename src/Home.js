import React from 'react';
import Common from '../src/Common';
import IconFB from '../src/images/IconFB.png';

const Home = () => {
  return (
    <>
     <Common

      name="Grow your core knowledge with "
      imgsrc={IconFB}
      visit='/service'
      btname="Get Started"
     />
    </>
  )
}

export default Home;