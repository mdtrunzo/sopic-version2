import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Img from '../../assets/fondo.jpg'
// import { plantillasService } from './plantillasService'

const initialState = {
  plantillas: [
    {
      id: 1,
      subtitle: 'HOLA MUNDO! SOY',
      title: 'Martina',
      img: Img,
      extras: [
        { text: 'LLEGUE EL DÍA', icon: '<FavoriteIcon />' },
        { text: '26 ENERO 2021' },
        { text: '20:05HS' },
        { text: '46CM' },
        { text: '3 KILOS' },
      ],
    },
  ],
  plantilla: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Get plantillas
export const getPlantillas = createAsyncThunk(
  'plantillas/getAll',
  async (_, thunkAPI) => {
    try {
      return initialState.plantillas
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
  extraReducers: (builders) => {},
})

export const { reset } = plantillaSlice.actions
export default plantillaSlice.reducer
