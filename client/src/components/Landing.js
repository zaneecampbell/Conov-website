import React from 'react';
import Type from './Type';
import PortfolioLanding from './PortfolioLanding';
import Intro from './Intro';

const Landing = () => {
  return (
    <div
      style={{
        backgroundImage: 'url("Intro_Wallpaper2.png")',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover'
      }}
    >
      <Intro />
      <div style={{ paddingBottom: '15px' }}>
        <PortfolioLanding />
      </div>
      <Type />
    </div>
  );
};

export default Landing;
