import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
// import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner';
import { useAppDispatch, useAppSelector } from '../hooks/hooks'


// This is the admin login page. This route should only be seen by the
// people who knows it exists. to access this page the url would be /admin-login
function AdminLogin() {

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
      navigate('/admin-dashboard')
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
      password,
    }

    // @ts-ignore
    dispatch(login(userData))
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <Container id='admin-container' className='center'>
          <Col className='center' sm={4}>
            {/* Register text */}
            <section className='heading'>
              <h1 id='admin-login-header'>Admin Login</h1>
            </section>
          </Col>
          <Col className='mt-3' sm={3}>
            <section className="register-form">
              <Form onSubmit={onSubmit}>

                {/* email */}
                <Form.Group className='mb-3' controlId='LoginFormEmail'>
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type='email' placeholder='Enter email' name='email' value={email} onChange={onChange} />
                </Form.Group>

                {/* password */}
                <Form.Group className='mb-3' controlId='LoginFormPassword'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type='password' name='password' value={password} onChange={onChange} />
                </Form.Group>

                {/* Submit Button */}
                <Button type='submit' variant='primary'>Submit</Button>
              </Form>
            </section>
          </Col>
      </Container>
    </>
  )
}

export default AdminLogin