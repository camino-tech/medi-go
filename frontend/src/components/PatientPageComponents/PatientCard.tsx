
import React from 'react'
import { Button, Card  } from 'react-bootstrap'

const PatientCard = (props: any) => {
  return (
    <div>
          <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/cat-avatar-illustration-cartoon-45383590.jpg">
              </Card.Img>
          <Card.Body>
            <Card.Title as='h1'> Patient Information</Card.Title>
            { 
              props.props.patients.map((patient: any) => (
            <Card.Text key={patient.id}>
             <b>Patient ID:</b> <br/> {patient.id} <br/>
             <b>Patient Name:</b> <br/>{patient.name} <br/>
             <b>Patient Generated Code:</b> <br/>{patient.code}<br/>
            </Card.Text>
                ))              
              }
            <Button size="sm">EDIT</Button>
          </Card.Body>
       {/* <Card >
          <Card.Body>
            <ListGroup>
            <ListGroup.Item>
            <Card.Title as='h1'> Primary Contact</Card.Title>
            <Card.Text>
              <b>Name:</b> <br/>Anna<br/>
              <b>Email:</b> <br/>Campainha<br/>
              <b>Phone</b>: <br/>707-555-2929<br/>
              <b>Relation to Patient:</b> <br/>Mother of the dog<br/>
              <Button>NOTIFY</Button>
                </Card.Text>
              </ListGroup.Item>
              <ListGroup.Item>
                <b>Type of Surgery:</b> Brazillian Butt Lift<br/>
              </ListGroup.Item>
              <ListGroup.Item>
                <b>Updates: </b> <br/>
                <Button>
                  Update Patient
                </Button>
                <ListGroup.Item>06/29/2022 9:30 AM Pre-Surgery</ListGroup.Item>
              </ListGroup.Item>
              </ListGroup>
          </Card.Body>
        </Card> */}
    </div>
  )
}

export default PatientCard;