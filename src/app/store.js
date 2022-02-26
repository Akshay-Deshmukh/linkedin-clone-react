import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../Redux/userStore/userSlice'

export const store = configureStore({
  reducer: {
    userStore: userReducer,
  },
});
