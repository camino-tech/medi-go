import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import statusService from './statusService'

const initialState = {
  status: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// create new status
export const createStatus = createAsyncThunk('status/create', async (statusData, thunkAPI) => {
  try {
    return await statusService.createStatus(statusData)
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

// get user status
export const getStatus = createAsyncThunk('status/getAll', async (_, thunkAPI) => {
  try {
    return await statusService.getStatus()
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

// delete status
export const deleteStatus = createAsyncThunk('status/delete', async (id, thunkAPI) => {
  try {
    // get user token
    return await statusService.deleteStatus(id)
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const statusSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {
    reset: (state) => initialState
  },
  extraReducers: (builder) => {
    builder
      .addCase(createStatus.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createStatus.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.status.push(action.payload)
      })
      .addCase(createStatus.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getStatus.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getStatus.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.status = action.payload
      })
      .addCase(getStatus.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteStatus.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteStatus.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.status = state.status.filter((status) => status._id !== action.payload.id)
      })
      .addCase(deleteStatus.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  }
})

export const { reset } = statusSlice.actions
export default statusSlice.reducer
