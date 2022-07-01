
import React from 'react'
import { Button, Card, CardGroup, ListGroup } from 'react-bootstrap';

const PatientCard = (props: any) => {
  return (
    <div>
      <CardGroup>
        <Card >
          <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/cat-avatar-illustration-cartoon-45383590.jpg">
          </Card.Img>
          <Card.Body>
            <Card.Title as='h1'> Patient Information</Card.Title>
            <Card.Text>
              <h5>Patient ID: <br/> <h6>000001</h6> </h5>
              <h5>Patient Name: <br/> <h6>Nala Campainha</h6> </h5>
              <h5>Patient Generated Code: <br/> <h6>1c45chs7d92020</h6></h5>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card >
          <Card.Body>
            <ListGroup>
            <ListGroup.Item>
            <Card.Title as='h1'> Primary Contact</Card.Title>
            <Card.Text>
              <h5>Name: <br/> <h6>Anna</h6> </h5>
              <h5>Email: <br/> <h6>Campainha</h6> </h5>
              <h5>Phone: <br/> <h6>707-555-2929</h6></h5>
              <h5>Relation to Patient: <br/> <h6>Mother of the dog</h6></h5>
              <Button>NOTIFY</Button>
                </Card.Text>
              </ListGroup.Item>
              <ListGroup.Item>
                <h5>Type of Surgery: <h6>Brazillian Butt Lift</h6></h5>
              </ListGroup.Item>
              <ListGroup.Item>
                <h5>Updates: </h5>
                <ListGroup.Item>06/29/2022 9:30 AM Pre-Surgery</ListGroup.Item>
              </ListGroup.Item>
              </ListGroup>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  )
}

export default PatientCard;