import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlices'

const rootReducer = combineReducers({
  user: userSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});