import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { loginWithCode, reset } from '../../features/patients/patientSlice';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Spinner from '../../components/Spinner';
import { toast } from 'react-toastify'

const UserLogin = () => {
  const [formData, setFormData] = useState({
    patientCode: '',
    websiteCode: '',
  });

  const { patientCode, websiteCode } = formData;

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  
  const { patients, isLoading, isError, isSuccess, message } = useAppSelector((state) => state.patients);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      navigate('/patient-home');
    }

    dispatch(reset());

  }, [patients, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e:any) => {
    setFormData((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e:any) => {
    e.preventDefault();

    const patientData = {
      patientCode,
      websiteCode,
    };

    // @ts-ignore
    dispatch(loginWithCode(patientData));
  }

  return (isLoading ? <Spinner /> :
    (
      <Container className='mt-3'>
        <Row className='mt-2 justify-content-center'>
          <Col md={6} lg={6}>
            <Form onSubmit={onSubmit}>
              <h1 className='center'>User Login</h1>

              {/* Patient Code */}
              <Form.Group className='mb-3' controlId='PatientCode'>
                <Form.Label>Patient Code</Form.Label>
                <Form.Control
                  type='text'
                  name='patientCode'
                  value={patientCode}
                  onChange={onChange}
                />
              </Form.Group>

              {/* Website Code */}
              <Form.Group className='mb-3' controlId='WebsiteCode'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='password'
                  name='websiteCode'
                  value={websiteCode}
                  onChange={onChange}
                />
                <Form.Text id='websiteCodeHelp' muted>
                  Your password is the 6-character 'website code' sent to you via text/e-mail.
                </Form.Text>
              </Form.Group>

              {/* Submit Button */}
              <Button variant='primary' type='submit'>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  );
};

export default UserLogin;
