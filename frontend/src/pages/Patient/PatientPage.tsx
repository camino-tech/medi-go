import React from 'react';
import PatientCard from '../../components/PatientPageComponents/PatientCard';
import PrimaryContactCard from '../../components/PatientPageComponents/PrimaryContactCard';
import { CardGroup, Container, Card } from 'react-bootstrap';
import { fakeDataPatientPage } from '../FakeDataPatientPage';
import { fakeDataPrimaryContact } from '../FakeDataPrimaryContact';
const PatientPage = () => {
  return (
      <Container className='mt-2'>
          <CardGroup>
              <Card>
                  <PatientCard props={fakeDataPatientPage} />
              </Card>
                  <Card>
                      <PrimaryContactCard props={ fakeDataPrimaryContact } />
                  </Card>
        </CardGroup>

      {/* <Row className='justify-content-center' lg={2}>
        <Col className='mt-3' lg={4}>
          <Card>
            <Card.Header>PATIENT PAGE</Card.Header>
            <Card.Body>
              <Card.Title>PATIENT PAGE</Card.Title>
              <Card.Subtitle>PATIENT PAGE</Card.Subtitle>
              <Button className='mt-3'>Chat with Nurse</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className='mt-3' lg={8}>
          <Card>
            <Card.Header>Previous Updates</Card.Header>
            <ListGroup.Item>06/29/2022 9:30 AM Pre-Surgery</ListGroup.Item>
            <ListGroup.Item>06/29/2022 9:30 AM Pre-Surgery</ListGroup.Item>
          </Card>
        </Col>
      </Row> */}
    </Container>
  )
};

export default PatientPage;
