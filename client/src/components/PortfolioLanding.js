import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const PortfolioLanding = () => {
  const images = [
    {
      src: '/Carousel_Images/1.png',
      altText: 'Berong Jusser',
      caption: 'Commission Piece',
      header: 'Berong Jusser'
    },
    {
      src: '/Carousel_Images/3.png',
      altText: 'Nonno',
      caption: 'Original Character',
      header: 'Nonno'
    },
    {
      src: '/Carousel_Images/2.png',
      altText: 'Milim Nava',
      caption: 'Commission Piece',
      header: 'Milim Nava'
    }
  ];
  return (
    <div
      style={{
        maxWidth: '500px',
        height: 'auto',
        margin: 'auto',
        textAlign: 'center'
      }}
    >
      <h1
        style={{ marginBottom: '25px', fontSize: '4rem' }}
        className='display-3'
      >
        Portfolio
      </h1>
      <UncontrolledCarousel items={images} />
    </div>
  );
};

export default PortfolioLanding;
