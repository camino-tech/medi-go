import React, { useEffect } from 'react'
import { useAppSelector } from '../hooks/hooks'
// import { useAppDispatch } from '../hooks/hooks'
import { useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
// @ts-ignore
import { fakeData } from './FakeDataDeleteLater'
import PatientTable from '../components/PatientTable'

/**
 * in the admin dashboard page, you can change the status of a patient
 * and chat with patients families
 */
const AdminDashboard = () => {

  const navigate = useNavigate()
  // const dispatch = useAppDispatch()

  // get the user data
  const { user } = useAppSelector((state) => state.auth)

  useEffect(() => {

    // if there isn't a user logged in redirect to login page
    if(!user) {
      navigate('/login')
    }

  }, [user, navigate])

  return (
    <>
      <Container>
        <Row className='center'>
          <div className='box-shadow mt-3 mb-3'>
            <h1 className='center'>Patients</h1>
            <PatientTable props={fakeData} />
          </div>
        </Row>
        <Row className='center'>
          <div className="box-shadow mt-3 mb-3 placeholder-div">
            This is going to be the chat box area.
          </div>
        </Row>
      </Container>
    </>
  )
}

export default AdminDashboard