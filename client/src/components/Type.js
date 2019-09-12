import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

const Type = () => {
  return (
    <div>
      <Container style={{ textAlign: 'center' }} fluid>
        <h1
          style={{ marginBottom: '25px', fontSize: '4rem' }}
          className='display-3'
        >
          Type Comparison
        </h1>
        <img
          style={{ width: '100%', maxWidth: '1100px' }}
          src='Commission.webp'
          alt='Comparison of different commission types'
        />
        <Row style={{ maxWidth: '1100px', margin: 'auto' }}>
          <Col xs='4'>
            <h3>
              <Link to='/A'>Type A</Link>
            </h3>
          </Col>
          <Col xs='4'>
            <h3>
              <Link to='/B'>Type B</Link>
            </h3>
          </Col>
          <Col xs='4'>
            <h3>
              <Link to='/C'>Type C</Link>
            </h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Type;
