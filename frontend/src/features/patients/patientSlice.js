import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import patientService from './patientService';

const initialState = {
  patients: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

//get user token
const token = (thunkAPI) => thunkAPI.getState().auth.user.token;

//get error message
const getError = (error, thunkAPI) => {
  const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
  return thunkAPI.rejectWithValue(message);
};

//create new patient
export const createPatient = createAsyncThunk('patients/create', async (patientData, thunkAPI) => {
  try {
    return await patientService.createPatient(patientData, token(thunkAPI));
  } catch (error) {
    getError(error, thunkAPI);
  }
});

//get patients
export const getPatients = createAsyncThunk('patients/getAll', async (_, thunkAPI) => {
  try {
    return await patientService.getPatients(token(thunkAPI));
  } catch (error) {
    getError(error, thunkAPI);
  }
});

//delete patient
export const deletePatient = createAsyncThunk('patients/delete', async (id, thunkAPI) => {
  try {
    return await patientService.deletePatient(id, token(thunkAPI));
  } catch (error) {
    getError(error, thunkAPI);
  }
});

export const patientSlice = createSlice({
  name: 'patient',
  initialState,
  reducers: {
    reset: (state) => initialState
  },
  extraReducers: (builder) => {
    builder
      .addCase(createPatient.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createPatient.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.patients.push(action.payload)
      })
      .addCase(createPatient.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getPatients.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getPatients.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.patients = action.payload
      })
      .addCase(getPatients.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deletePatient.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deletePatient.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.patients = state.patients.filter((patient) => patient._id !== action.payload.id)
      })
      .addCase(deletePatient.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  }
});

export const { reset } = patientSlice.actions;
export default patientSlice.reducer; //patientReducer
