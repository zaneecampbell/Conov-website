import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

const Type = () => {
  return (
    <div style={{ paddingBottom: '30px' }}>
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
        <Row
          style={{
            maxWidth: '1100px',
            margin: 'auto',
            background: 'grey',
            opacity: '0.7'
          }}
        >
          <Col xs='4'>
            <ul style={{ fontSize: '.85rem', listStyleType: 'none' }}>
              <strong>
                <h3>Type A</h3>
                <li>Half body 110＄/ Full body 150 ＄ (Tax incl.)</li>
                <li>Simple style</li>
                <li>Simple shading/ Highlights</li>
              </strong>
            </ul>
          </Col>
          <Col xs='4'>
            <ul style={{ fontSize: '.85rem', listStyleType: 'none' }}>
              <strong>
                <h3>Type B</h3>
                <li>Half body 130＄/ Full body 170 ＄ (Tax incl.)</li>
                <li>Illustration style</li>
                <li>More color then Type A</li>
              </strong>
            </ul>
          </Col>
          <Col xs='4'>
            <ul style={{ fontSize: '.85rem', listStyleType: 'none' }}>
              <strong>
                <h3>Type C</h3>
                <li>Half body 200＄/ Full body 240 ＄ (Tax incl.)</li>
                <li>Full style</li>
                <li>Vibrant shading and highlights</li>
              </strong>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Type;
