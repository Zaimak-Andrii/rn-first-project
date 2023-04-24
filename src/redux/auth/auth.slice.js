import { createSlice } from '@reduxjs/toolkit';
import { authInitialState } from './auth.initial';

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    login: (state, { payload }) => payload,
    registration: (state, { payload }) => payload,
    logout: () => authInitialState,
  },
  extraReducers: (builder) => {},
});

export const { login, registration, logout } = authSlice.actions;

export default authSlice.reducer;
