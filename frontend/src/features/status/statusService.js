import axios from 'axios'

const API_URL = '/api/status/'

// create new status
const createStatus = async (statusData) => {
  const response = await axios.post(API_URL, statusData)
  return response.data
}

// get user status
const getStatus = async () => {
  const response = await axios.get(API_URL)
  return response.data
}

// Delete status
const deleteStatus = async (statusId) => {
  const response = await axios.delete(API_URL + statusId)
  return response.data
}

const statusService = {
  createStatus,
  getStatus,
  deleteStatus,
}

export default statusService;