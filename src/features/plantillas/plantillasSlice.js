import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import plantillasService from './plantillasService'

const initialState = {
  plantillas: [],
  plantilla: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Get plantillas
export const getPlantillas = createAsyncThunk(
  'plantilla/getAll',
  async (thunkAPI) => {
    try {
      return await plantillasService.getPlantillas()
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

// Get plantilla User
export const getPlantillaUser = createAsyncThunk(
  'plantilla/getPlantilla',
  async (thunkAPI) => {
    try {
      return await plantillasService.getPlantillaUser()
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

// Get plantillas All
export const getPlantillasAll = createAsyncThunk(
  'plantilla/getAllAdmin',
  async (thunkAPI) => {
    try {
      return await plantillasService.getPlantillasAll()
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

// Guardar plantilla
export const createPlantilla = createAsyncThunk(
  'plantilla/createPlantilla',
  async (plantillaData, thunkAPI) => {
    try {
      return await plantillasService.createPlantilla(plantillaData)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const plantillaSlice = createSlice({
  name: 'plantilla',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPlantillas.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getPlantillas.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.plantillas = action.payload
      })
      .addCase(getPlantillas.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getPlantillasAll.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getPlantillasAll.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.plantillas = action.payload
      })
      .addCase(getPlantillasAll.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getPlantillaUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getPlantillaUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.plantilla = action.payload
      })
      .addCase(getPlantillaUser.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(createPlantilla.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createPlantilla.fulfilled, (state) => {
        state.isLoading = false
        state.isSuccess = true
      })
      .addCase(createPlantilla.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = plantillaSlice.actions
export default plantillaSlice.reducer
