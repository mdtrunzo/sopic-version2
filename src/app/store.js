import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import plantillaReducer from '../features/plantillas/plantillasSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    plantilla: plantillaReducer,
  },
})
