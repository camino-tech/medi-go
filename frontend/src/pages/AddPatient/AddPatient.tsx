import React, { useEffect } from 'react'
import { useAppSelector } from '../../hooks/hooks'
import { useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'


//TODO
// [] store formdata in state
// finish submit 
// check if phone# is valid

// AddPatient is a protected route. only admins or superadmins can access this page
function AddPatient() {

  const navigate = useNavigate()
  const { user } = useAppSelector((state) => state.auth)

  // NOTES:
  // user.role[0] == the role given to the user
  // admin || superAdmin

  useEffect(() => {

    // if no user is logged in navigate to home
    if (!user) {
      navigate('/')
    }

    // if user isnt authorized navigate to home
    if (user.role[0] !== 'superAdmin' && user.role[0] !== 'admin') {
      navigate('/')
    }

  }, [user, navigate])

  const onSubmit = () => {
    //TODO
  }

  return (
    <div className='center mt-3'>
      <Container>
        <Row>
          <h1 className='center'>Add a new patient</h1>
        </Row>
        <Row className='max-width mt-3 m-auto'>
          <Form onSubmit={onSubmit} >
            {/* name */}
            <Form.Group>
              <Form.Label>Please enter a name:</Form.Label>
              <Form.Control type='text' placeholder='Please type full name' />
            </Form.Group>

            {/* familyEmail */}
            <Form.Group>
              <Form.Label>Please enter an Email:</Form.Label>
              <Form.Control type='email' placeholder='Please enter an email' />
            </Form.Group>

            {/* phone# */}
            <Form.Group>
              <Form.Label>Please enter a phone number</Form.Label>
              <Form.Control type='number' placeholder='Please enter a phone number' />
            </Form.Group>

            {/* initialStatus */}
            <Form.Group>
              
            </Form.Group>
            <Button type='submit' variant='primary' id='add-patient-submit'>Submit</Button>
          </Form>
        </Row>
      </Container>
    </div>
  )
}

export default AddPatient