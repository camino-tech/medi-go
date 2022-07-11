import axios from 'axios';

const API_URL = '/api/patients/';

const config = (token) => ({ headers: { Authorization: `Bearer ${token}` }});

//create new patient
const createPatient = async (patientData, token) => {
  const response = await axios.post(API_URL, patientData, config(token));
  return response.data;
}

// get user patient
const getPatients = async (token) => {
  const route = 'all'
  const response = await axios.get(API_URL + route, config(token));
  return response.data;
}

const getPatient = async (patientId, token) => {
  const response = await axios.get(API_URL + patientId, config(token));
  return response.data;
}

// delete user patient
const deletePatient = async (patientId, token) => {
  const response = await axios.delete(API_URL + patientId, config(token));
  return response.data;
}

// login user patient with code
const loginWithCode = async (patientData) => {
  const response = await axios.post(API_URL + 'login', patientData);
  if (response.data) {
    localStorage.setItem('patient', JSON.stringify(response.data));
  }
  
  return response.data;
}

const patientService = {
  createPatient,
  getPatients,
  getPatient,
  deletePatient,
  loginWithCode,
}

export default patientService;
