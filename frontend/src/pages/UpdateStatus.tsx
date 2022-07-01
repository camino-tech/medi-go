import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

// can be converted to a modal
const UpdateStatus = () => {
  return (
    <Container className='mt-3'>
      <Row className='mt-2 justify-content-center'>
        <Col md={6} lg={6}>
          <Form>
            <h1 className='center'>Update Patient Status</h1>
            <Form.Group className='mb-3' controlId='PatientCode'>
              <Form.Label>Patient Code</Form.Label>
              <Form.Control type='text' placeholder='000001' readOnly />
            </Form.Group>
            <Form.Group className='mb-3' controlId='PatientName'>
              <Form.Label>Patient Name</Form.Label>
              <Form.Control type='text' placeholder='John Doe' readOnly />
            </Form.Group>
            <Form.Group className='mb-3' controlId='status'>
              <Form.Label>Status</Form.Label>
              <Form.Select>
                <option>Pre-operation</option>
                <option>In-operation</option>
                <option>Post-operation</option>
              </Form.Select>
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

export default UpdateStatus;
