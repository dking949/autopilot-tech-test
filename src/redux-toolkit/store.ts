import { configureStore } from '@reduxjs/toolkit';
import MainReducer from './MainSlice';

const store = configureStore({
  reducer: {
    countries: MainReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>

export default store;