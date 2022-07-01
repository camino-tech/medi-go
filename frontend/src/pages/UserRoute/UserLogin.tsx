import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const UserLogin = () => {
  return (
    <Container className='mt-3'>
      <Row className='mt-2 justify-content-center'>
        <Col md={6} lg={6}>
          <Form>
            <h1 className='center'>User Login</h1>
            <Form.Group className='mb-3' controlId='PatientCode'>
              <Form.Label>Patient Code</Form.Label>
              <Form.Control type='text'/>
            </Form.Group>
            <Form.Group className='mb-3' controlId='WebsiteCode'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password'/>
              <Form.Text id='websiteCodeHelp' muted>
                Your password is the 6-character 'website code' sent to you via text/e-mail.
              </Form.Text>
            </Form.Group>
            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default UserLogin;
