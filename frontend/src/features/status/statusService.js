import axios from 'axios'

const API_URL = '/api/status/'

// create new status
const createStatus = async (statusData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    },
  }
  const response = await axios.post(API_URL, statusData, config)
  return response.data
}

// get user status
const getStatus = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    },
  }
  const response = await axios.get(API_URL, config)
  return response.data
}

// Delete status
const deleteStatus = async (statusId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    },
  }
  const response = await axios.delete(API_URL + statusId, config)
  return response.data
}

const statusService = {
  createStatus,
  getStatus,
  deleteStatus,
}

export default statusService;