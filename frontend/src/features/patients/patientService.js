import axios from 'axios';

const API_URL = '/api/patients';

const config = (token) => ({ headers: { Authorization: `Bearer ${token}` }});

//create new patient
const createPatient = async (patientData, token) => {
  const response = await axios.post(API_URL, patientData, config(token));
  return response.data;
}

// get user patient
const getPatients = async (token) => {
  const response = await axios.get(API_URL, config(token));
  return response.data;
}

// delete user patient
const deletePatient = async (patientId, token) => {
  const response = await axios.delete(API_URL + patientId, config(token));
  return response.data;
}

const patientService = {
  createPatient,
  getPatients,
  deletePatient,
}

export default patientService;
