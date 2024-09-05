import { configureStore } from '@reduxjs/toolkit'
import shofyReducer from './shofySlice'
export const store = configureStore({
      reducer: {
            shofy: shofyReducer
      },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch