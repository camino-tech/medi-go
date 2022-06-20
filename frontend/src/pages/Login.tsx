import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
// import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner';
import { useAppDispatch, useAppSelector } from '../hooks/hooks'

function Login() {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const { user, isLoading, isError, isSuccess, message } = useAppSelector((state) => state.auth)

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())

  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e:any) => {
    setFormData((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e:any) => {
    e.preventDefault()

    const userData = {
      email,
      password
    }

    // @ts-ignore
    dispatch(login(userData))
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <Container>
        <Row>
          <Col className='center' sm={3}>
            {/* Register text */}
            <section className='heading'>
              <h1>Login</h1>
              <p>Please login</p>
            </section>
          </Col>
          <Col className='center mt-3'>
            <section className="register-form">
              <Form onSubmit={onSubmit}>

                {/* email */}
                <Form.Group className='mb-3' controlId='RegisterFormEmail'>
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type='email' placeholder='Enter email' name='email' value={email} onChange={onChange} />
                </Form.Group>

                {/* password */}
                <Form.Group className='mb-3' controlId='RegisterFormPassword'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type='password' name='password' value={password} onChange={onChange} />
                </Form.Group>

                {/* Submit Button */}
                <Button type='submit' variant='primary'>Submit</Button>
              </Form>
            </section>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Login