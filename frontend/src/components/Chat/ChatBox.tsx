import React from 'react'
import { ButtonGroup, Card, Container, Navbar } from 'react-bootstrap';
import CloseButton from 'react-bootstrap/CloseButton'

// chatbox component. IMPLEMENT LATER
// dont push this to main
const ChatBox = (props: any) => {
  return (
 <div>
    <Container>
      {props.props.user.map((user: any) => (
        <Card style={{ width: '18rem' }}>
          <Navbar key={user.role}>
            <h1>Pass in role of user logged in <br />
              <h2>{user.role}</h2> </h1>
              <ButtonGroup>
                <CloseButton />
              </ButtonGroup>        
          </Navbar>
        </Card>
      ))
      }
      </Container>
  </div>

  )
};

export default ChatBox;