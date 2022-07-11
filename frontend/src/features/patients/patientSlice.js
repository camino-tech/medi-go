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

//create new patient
export const createPatient = createAsyncThunk('patients/create', async (patientData, thunkAPI) => {
  try {
    return await patientService.createPatient(patientData, token(thunkAPI));
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
  }
});

//get patients
export const getPatients = createAsyncThunk('patients/getAll', async (_, thunkAPI) => {
  try {
    return await patientService.getPatients(token(thunkAPI));
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
  }
});

// get one patient
export const getPatient = createAsyncThunk('patients/getOne', async (id, thunkAPI) => {
  try {
    return await patientService.getPatient(id, token(thunkAPI));
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
  }
});

//delete patient
export const deletePatient = createAsyncThunk('patients/delete', async (id, thunkAPI) => {
  try {
    return await patientService.deletePatient(id, token(thunkAPI));
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
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
      .addCase(getPatient.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getPatient.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.patients = action.payload
      })
      .addCase(getPatient.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  }
});

// login with Code
export const loginWithCode = createAsyncThunk('patients/login', async (patient, thunkAPI) => {
  try {
    return await patientService.loginWithCode(patient);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const { reset } = patientSlice.actions;
export default patientSlice.reducer; //patientReducer
