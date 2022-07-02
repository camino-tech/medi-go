
import React from 'react'
import { Card, ListGroup, Button } from 'react-bootstrap'

const PrimaryContactCard = (props: any) => {

  return (
          <Card.Body>
            <ListGroup>
            <ListGroup.Item>
          <Card.Title as='h1'> Primary Contact</Card.Title>
          {
            props.props.primaryCareContact.map((primaryCareContact: any) => (
              <Card.Text key={primaryCareContact.name}>
                <b>Name:</b> <br />{primaryCareContact.name}<br />
                <b>Email:</b> <br />{primaryCareContact.email}<br />
                <b>Phone</b>: <br />{primaryCareContact.phone}<br />
                <b>Relation to Patient:</b> <br />{primaryCareContact.relationshipToPatient}<br />
                <Button>NOTIFY</Button>
              </Card.Text>
            ))
          }
              </ListGroup.Item>
              <ListGroup.Item>
                <b>Type of Surgery:</b> Brazillian Butt Lift<br/>
              </ListGroup.Item>
              <ListGroup.Item>
                <b>Updates: </b> <br/>
          <ListGroup.Item>06/29/2022 9:30 AM Pre-Surgery</ListGroup.Item> <br />
              <Button>
                  Update Patient Information
              </Button>
              </ListGroup.Item>
              </ListGroup>
          </Card.Body>
  )
}

export default PrimaryContactCard;