import React from 'react';
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap';

const UserHomePage = () => {
  const patient = JSON.parse(localStorage.getItem('patient') || "{}");

  console.log(patient);

  return (
    <Container className='mt-3 '>
      <Row className='justify-content-center gx-4 gy-2' lg={2}>
        <Col className='mt-2' lg={5}>
          <Card className='box-shadow'>
            <Card.Header>Patient Code: {patient ? patient.patientCode : ""}</Card.Header>
            <Card.Body>
              <Card.Title>Current Status: In Surgery</Card.Title>
              <Card.Subtitle>06/30/2022 11:30 AM</Card.Subtitle>
              <Button className='mt-3'>Chat with Nurse</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className='mt-2' lg={7}>
          <Card className='box-shadow'>
            <Card.Header>Previous Updates</Card.Header>
            <ListGroup.Item>06/29/2022 9:30 AM Pre-Surgery</ListGroup.Item>
            <ListGroup.Item>06/29/2022 9:30 AM Pre-Surgery</ListGroup.Item>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserHomePage;
