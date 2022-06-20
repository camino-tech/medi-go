import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// import { useSelector, useDispatch } from 'react-redux'
import GoalForm from '../components/GoalForm'
import Container from 'react-bootstrap/Container'
import { Row } from 'react-bootstrap'
import Spinner from '../components/Spinner'
import { getGoals } from '../features/goals/goalSlice'
import { reset } from '../features/auth/authSlice'
import GoalItem from '../components/GoalItem'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'


function Dashboard() {

  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  
  const { user } = useAppSelector((state) => state.auth)
  const { goals, isLoading, isError, message } = useAppSelector((state) => state.goals)

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getGoals())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner/>
  }

  return (
    <div className='center'>
      <Container>
        <Row>
          <section>
            <h1>Welcome {user && user.name}</h1>
            <p>Goals Dashboard</p>
          </section>
        </Row>
        {/* Goal form */}
        <Row>
          <GoalForm />
        </Row>
        {/* Show current goals */}
        <Row>
          <section className='goals-container'>
            <Container>
                {
                  goals.length > 0 ? (
                    <div>
                      {goals.map((goal: any) => (
                        <GoalItem key={goal._id} goal={goal} />
                      ))}
                    </div>
                  ) : (<h3>You have not set any goals</h3>)
                }
            </Container>
          </section>
        </Row>
      </Container>
    </div>
  )
}

export default Dashboard
