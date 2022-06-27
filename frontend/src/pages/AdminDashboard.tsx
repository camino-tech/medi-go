import React, { useEffect } from 'react'
import { useAppSelector } from '../hooks/hooks'
// import { useAppDispatch } from '../hooks/hooks'
import { useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
// @ts-ignore
import { fakeData } from './FakeDataDeleteLater'
import PatientTable from '../components/PatientTable'
import Chat from '../components/Chat/ChatBox'
import TestStatusDispatch from './TestStatusDispatch'

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
      navigate('/admin-login')
    }

  }, [user, navigate])

  return (
    <>
      <Container>
        <Row>
          <h1>Admin Dashboard</h1>
        </Row>
        <Row className='center'>
          <PatientTable props={fakeData} />
        </Row>
        <Row className='center'>
          <Chat />
        </Row>
        <Row>
          <TestStatusDispatch />
        </Row>
      </Container>
    </>
  )
}

export default AdminDashboard