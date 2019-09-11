import React from 'react';
import Type from './Type';
import PortfolioLanding from './PortfolioLanding';
import Intro from './Intro';

const Landing = () => {
  return (
    <div>
      <Intro />
      <PortfolioLanding />
      <Type />
    </div>
  );
};

export default Landing;
