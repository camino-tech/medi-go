import React from 'react'
import NavBar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { useNavigate } from 'react-router-dom'
import { logout, reset } from '../features/auth/authSlice'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'

// Navbar
function Header() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const { user } = useAppSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/admin-login')
  }

  const isSuperAdmin = () => {
    if (user && user.role[0] === 'superAdmin') {
      return true
    }
    return false
  }

  const ClickOnLogout = () => {
    return <Nav.Link onClick={onLogout} >Logout</Nav.Link>
  }

  const NavigateToRegister = () => {
    return <Nav.Link href='/register'>Register</Nav.Link>
  }

  return (
    <NavBar bg='light' expand='lg'>
      <Container>
        <NavBar.Brand href='/'>Medi-go</NavBar.Brand>
        <NavBar.Toggle aria-controls='basic-navbar-nav' />
        <NavBar.Collapse id='basic-navbar-nav'>
          {
            user
              ? <ClickOnLogout />
              : null
          }
          {
            isSuperAdmin()
              ? <NavigateToRegister />
              : null
          }
        </NavBar.Collapse>
      </Container>
    </NavBar>
  )
}

export default Header