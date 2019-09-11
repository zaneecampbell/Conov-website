import React, { useState } from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

const Footer = () => {
  const [emailData, setEmailData] = useState({
    email: '',
    name: '',
    text: ''
  });

  const { email, name, text } = emailData;

  const onChange = e => {
    setEmailData({ ...emailData, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      const body = JSON.stringify({ email, name, text });
      await axios.post('/api/email/', body, config);
      console.log('success!');
    } catch (err) {
      console.log(err.response.statusText);
    }
  };

  return (
    <div
      style={{
        maxWidth: '960px',
        margin: 'auto',
        padding: '25px'
      }}
    >
      <Form onSubmit={e => onSubmit(e)}>
        <FormGroup row>
          <Label for='exampleEmail' sm={2}>
            Email
          </Label>
          <Col sm={10}>
            <Input
              type='email'
              name='email'
              value={email}
              id='exampleEmail'
              placeholder='Give me an e-mail to get back to you with!'
              onChange={e => onChange(e)}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for='name/company' sm={2}>
            Name/Company
          </Label>
          <Col sm={10}>
            <Input
              type='text'
              name='name'
              value={name}
              id='name/company'
              placeholder='Enter your Name or Company!'
              onChange={e => onChange(e)}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for='exampleText' sm={2}>
            Text Area
          </Label>
          <Col sm={10}>
            <Input
              type='textarea'
              name='text'
              value={text}
              id='exampleText'
              placeholder='Give me an idea of what you want!'
              onChange={e => onChange(e)}
            />
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
};

export default Footer;
