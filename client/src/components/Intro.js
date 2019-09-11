import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Intro = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url('Intro_Wallpaper.jpg')",
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top',
        position: 'relative',
        zIndex: '1'
      }}
    >
      <Container
        style={{
          textAlign: 'center',
          paddingTop: '5vh',
          paddingBottom: '5vh',
          position: 'relative',
          zIndex: '1'
        }}
        fluid
      >
        <Row
          style={{
            maxWidth: '1100px',
            margin: 'auto',
            textAlign: 'center'
          }}
        >
          <Col style={{ marginBottom: '15px' }} md='12'>
            <img
              src='Chocon-profile.jpg'
              alt='profile pic'
              style={{ borderRadius: '50%', maxWidth: '150px' }}
            />
          </Col>
          <Col style={{ margin: 'auto' }} md='6'>
            <h5>
              Hello! I'm a Korean digital artist specializing in cute girls. I
              stream my art (and games!) Mondays-Fridays starting around 9-10am
              (PDT) on twitch. I've also started using Youtube as another avenue
              to get my content out there and grow my community. I love talking
              to chat on twitch. So come hangout or shoot me and email if you
              have a commission request!
            </h5>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
