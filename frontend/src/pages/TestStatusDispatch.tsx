import React, { useEffect } from 'react'
import { useAppSelector } from '../hooks/hooks'
import { useAppDispatch } from '../hooks/hooks'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { Button } from 'react-bootstrap'
import { createStatus, getStatus, deleteStatus } from '../features/status/statusSlice'

//{ _id: ObjectId('62be1a417ecd247fdc42f541')}
/**
 * in the admin dashboard page, you can change the status of a patient
 * and chat with patients families
 */
const TestStatusDispatch = () => {
  const dispatch = useAppDispatch()

  // get the status array from global state
  const { status } = useAppSelector((state) => state.status)

  useEffect(() => {

    // get status will get all of the statuses so that I can map them below
    dispatch(getStatus())

  }, [dispatch])

  const newStatus = {
    patientId: '1113',
    statusDate: new Date(),
    statusState: ['checkedIn'],
  }

  const handleOnClick = (e:any) => {
    e.preventDefault()

    // this will create the status. imported from statusSlice
    // @ts-ignore
    dispatch(createStatus(newStatus))
    console.log(status)
  }

  return (
    <>
      <Container>
        <Row>
          <h1>Test Status Redux</h1>
        </Row>
        <Row>
          <>
          <Button onClick={handleOnClick}>check if dispatch is adding a new status</Button>
          </>
        </Row>
        <Row>
        {status.map((status: any) => (
            <div key={status._id}>
              <h6>{status._id}</h6>
              <h6>{status.patientId}</h6>
              <h6>{status.statusDate}</h6>
              <h6>{status.statusState}</h6>
              <Button onClick={
                () => {
                  // @ts-ignore
                  dispatch(deleteStatus('62be1a417ecd247fdc42f541'))
                }
              }>Delete</Button>
            </div>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default TestStatusDispatch