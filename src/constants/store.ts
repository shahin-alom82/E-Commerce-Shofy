import { configureStore } from '@reduxjs/toolkit'
import shofyReducer from './shofySlice'
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';

// Persist configuration
const persistConfig = {
      key: 'root',
      version: 1,
      storage,
};
// Creating a persisted reducer
const persistedReducer = persistReducer(persistConfig, shofyReducer);
export const store = configureStore({
      reducer: {
            shofy: persistedReducer
      },
})
// persist
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch