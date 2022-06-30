import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';

const UserLogin = () => {
  return (
    <Container className='mt-5'>
      <Row className='justify-content-center'>
        <Col md={6} lg={6}>
          <Form>
            <h1 className='center'>User Login</h1>
            <Form.Group className="mb-3" controlId='PatientCode'>
              <Form.Label>Patient Code</Form.Label>
              <Form.Control type="text"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId='PatientCode'>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password"/>
              <Form.Text id="websiteCodeHelp" muted>
                Your password is the 10-character 'website code' sent to you via text/e-mail.
              </Form.Text>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default UserLogin;
