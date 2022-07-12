import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../../hooks/hooks'
import { useAppDispatch } from '../../hooks/hooks'
import { useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import { createPatient, getPatients } from '../../features/patients/patientSlice'
import { toast } from 'react-toastify'
import Spinner from '../../components/Spinner'
import { createStatus } from '../../features/status/statusSlice'


// TODO
// finish submit 
// check if phone# is valid

// AddPatient is a protected route. only admins or superadmins can access this page
// this is used to add a new patient to the collection. 
function AddPatient() {

  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { user } = useAppSelector((state) => state.auth)
  const { patients, isError, isLoading, message } = useAppSelector((state) => state.patients)

  const [patient, setPatient] = useState({
    name: '',
    emergencyContactName: '',
    emergencyContactEmail: '',
    emergencyContactPhoneNumber: '',
    emergencyContactRelationship: '',
    employeeID: '',
    typeOfSurgery: '',
  })

  // NOTES:
  // user.role[0] == the role given to the user
  // admin || superAdmin

  useEffect(() => {

    if (isError) {
      toast.error(message)
    }

    // if no user is logged in navigate to home
    if (!user) {
      navigate('/')
    }

    // if user isnt authorized navigate to home
    if (user.role[0] !== 'superAdmin' && user.role[0] !== 'admin') {
      navigate('/')
    }

    // this will load all patients into state.
    dispatch(getPatients())

  }, [user, message, isError, dispatch, navigate])

  const onChange = (e:any) => {
    setPatient((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e:any) => {
    e.preventDefault()
    
    // check for valid phone number

    const patientData = {
      name: patient.name,
      primaryContactName: patient.emergencyContactName,
      primaryContactEmail: patient.emergencyContactEmail,
      primaryContactPhone: patient.emergencyContactPhoneNumber,
      primaryContactRelationship: patient.emergencyContactRelationship,
      employeeID: patient.employeeID,
      typeOfSurgery: patient.typeOfSurgery,
    }

    // @ts-ignore
    dispatch(createPatient(patientData))

    const patientCode: String = '' + (parseInt(patients[patients.length -1]['patientCode']) + 1)
    console.log(patientCode)

    const newStatus: Object = {
      patientId: patientCode,
      statusDate: new Date(),
      statusState: ['checkedIn']
    }

    // @ts-ignore
    dispatch(createStatus(newStatus))
    // navigate('/admin-dashboard')

  }

  if (isLoading) {
    return (
      <Spinner />
    )
  }

  return (
    <Container fluid='md' className='max-width mt-3'>
      <Row>
        <h2>Add patient</h2>
      </Row>
      <Row>
        <Form onSubmit={onSubmit}>

          {/* name */}
          <Form.Group className='my-3'>
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type='text' 
              placeholder='ex. John Doe'
              name='name' 
              value={patient.name}
              onChange={onChange} />
            <Form.Text className='text-muted'>
              Please enter the patients full name
            </Form.Text>
          </Form.Group>

          {/* emergencyContactName */}
          <Form.Group className='my-3'>
            <Form.Label>Emergency Contact Name</Form.Label>
            <Form.Control 
              type='text'
              placeholder='Jenny Doe'
              name='emergencyContactName'
              value={patient.emergencyContactName}
              onChange={onChange}/>
            <Form.Text className='text-muted'>
              Please enter the name of the patients emergency contact
            </Form.Text>
          </Form.Group>

          {/* emergencyContactEmail */}
          <Form.Group className='my-3'>
            <Form.Label>Emergency Contact Email</Form.Label>
            <Form.Control 
              type='email' 
              placeholder='jenny.doe@email.com'
              name='emergencyContactEmail'
              value={patient.emergencyContactEmail}
              onChange={onChange}/>
          </Form.Group>

          {/* emergencyContactPhoneNumber */}
          <Form.Group className='my-3'>
            <Form.Label>Emergency Contact Phone Number</Form.Label>
            <Form.Control
              type='tel' 
              placeholder='111-111-1111'
              name='emergencyContactPhoneNumber'
              value={patient.emergencyContactPhoneNumber}
              onChange={onChange}/>
          </Form.Group>

          {/* emergencyContactRelationship */}
          <Form.Group className='my-3'>
            <Form.Label>Emergency Contact Relationship</Form.Label>
            <Form.Control 
              type='text' 
              placeholder='Mother'
              name='emergencyContactRelationship'
              value={patient.emergencyContactRelationship}
              onChange={onChange}/>
          </Form.Group>

          {/* employeeID */}
          <Form.Group className='my-3'>
            <Form.Label>Nurse ID</Form.Label>
            <Form.Control 
              type='text'
              value={patient.employeeID}
              name='employeeID'
              onChange={onChange} />
            <Form.Text className='text-muted'>
              Please enter the ID of the nurse in charge of this patient
            </Form.Text>
          </Form.Group>

          {/* typeOfSurgery */}
          <Form.Group className='my-3'>
            <Form.Label>Type of surgery</Form.Label>
            <Form.Control
              type='text' 
              placeholder='Hip Replacement Surgery'
              name='typeOfSurgery'
              value={patient.typeOfSurgery} 
              onChange={onChange}/>
          </Form.Group>

          {/* Submit Button */}
          <Button type='submit' variant='primary'>Submit</Button>
        </Form>
      </Row>
    </Container>
  )
}

export default AddPatient