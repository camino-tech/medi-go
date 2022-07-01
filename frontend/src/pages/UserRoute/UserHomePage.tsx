import React from 'react';
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap';

const UserHomePage = () => {
  return (
    <Container className='mt-3'>
      <Row className='justify-content-center' lg={2}>
        <Col className='mt-2' lg={4}>
          <Card>
            <Card.Header>Patient Code: 00001</Card.Header>
            <Card.Body>
              <Card.Title>Current Status: In Surgery</Card.Title>
              <Card.Subtitle>06/30/2022 11:30 AM</Card.Subtitle>
              <Button className='mt-3'>Chat with Nurse</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className='mt-2' lg={8}>
          <Card>
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
