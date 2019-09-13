import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

const Portfolio = () => {
  return (
    <div
      style={{
        minHeight: '75vh',
        textAlign: 'center',
        paddingTop: '15px',
        paddingBottom: '15px',
        maxWidth: '1400px',
        margin: 'auto'
      }}
    >
      <h1
        style={{ marginBottom: '25px', fontSize: '4rem' }}
        className='display-3'
      >
        Portfolio
      </h1>
      <div>
        <Card
          style={{ maxWidth: '318px', margin: '15px', display: 'inline-block' }}
        >
          <CardImg
            top
            width='100%'
            src='/Carousel_Images/1.png'
            alt='Berong Jusser'
          />
          <CardBody>
            <CardTitle>Berong Jusser</CardTitle>
            <CardSubtitle>Commission</CardSubtitle>
          </CardBody>
        </Card>
        <Card
          style={{ maxWidth: '318px', margin: '15px', display: 'inline-block' }}
        >
          <CardImg
            top
            width='100%'
            src='/Carousel_Images/2.png'
            alt='Berong Jusser'
          />
          <CardBody>
            <CardTitle>Berong Jusser</CardTitle>
            <CardSubtitle>Commission</CardSubtitle>
          </CardBody>
        </Card>
        <Card
          style={{ maxWidth: '318px', margin: '15px', display: 'inline-block' }}
        >
          <CardImg
            top
            width='100%'
            src='/Carousel_Images/3.png'
            alt='Berong Jusser'
          />
          <CardBody>
            <CardTitle>Berong Jusser</CardTitle>
            <CardSubtitle>Commission</CardSubtitle>
          </CardBody>
        </Card>
        <Card
          style={{ maxWidth: '318px', margin: '15px', display: 'inline-block' }}
        >
          <CardImg
            top
            width='100%'
            src='/Carousel_Images/4.jpg'
            alt='Berong Jusser'
          />
          <CardBody>
            <CardTitle>Berong Jusser</CardTitle>
            <CardSubtitle>Commission</CardSubtitle>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Portfolio;
