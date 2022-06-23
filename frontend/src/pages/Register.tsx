import React, { useState, useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { register, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner';
import { useAppDispatch, useAppSelector } from '../hooks/hooks'


/**
 * This page can only be accessed through the Super Admin role and is used to
 * register new admins.
 */
function Register() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
    role: '',
  })

  const { name, email, password, password2, role } = formData

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const { user, isLoading, isError, isSuccess, message } = useAppSelector((state) => state.auth)

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    // if (isSuccess || user) {
    //   navigate('/')
    // }

    // On success of making a new account, redirect to dashboard.
    if (isSuccess) {
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

    // check for password match
    if (password !== password2) {
      toast.error('Passwords do not match')
    } else {
      const userData = {
        name,
        email,
        password,
        role,
      }
      // console.log(userData)
      // @ts-ignore
      dispatch(register(userData))
    }
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
              <h1>Register</h1>
              <p>Register a new admin account.</p>
            </section>
          </Col>
          <Col className='center mt-3'>
            <section className="register-form">
              <Form onSubmit={onSubmit}>
                {/* name */}
                <Form.Group className='mb-3' controlId='RegisterFormName'>
                  <Form.Label>Name</Form.Label>
                  <Form.Control type='text' placeholder='Enter name' name='name' value={name} onChange={onChange} />
                </Form.Group>

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

                {/* password2 */}
                <Form.Group className='mb-3' controlId='RegisterFormPassword2'>
                  <Form.Label>Please re-enter your password</Form.Label>
                  <Form.Control type='password' name='password2' value={password2} onChange={onChange} />
                </Form.Group>

                <Form.Group className='mt-3 mb-3' controlId='RegisterFormRole'>
                  {/* <Form.Label>Please select a role</Form.Label> */}
                  <Form.Control
                    as='select'
                    name='role'
                    value={role}
                    onChange={onChange}
                    >
                      <option>Please select a role</option>
                      <option value='admin'>Admin</option>
                      <option value='superAdmin'>Super Admin</option>
                  </Form.Control>
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

export default Register