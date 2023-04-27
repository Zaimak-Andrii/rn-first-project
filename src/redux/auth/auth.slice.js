import { createSlice } from '@reduxjs/toolkit';
import { authInitialState } from './auth.initial';
import { signInThunk, signOutThunk, signUpThunk } from './auth.thunk';
import { status } from 'constants';

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    updateUser: (state, { payload }) => {
      state.id = payload.id;
      state.avatar = payload.avatar;
      state.email = payload.email;
      state.username = payload.username;
    },
  },
  extraReducers: (builder) =>
    builder
      // Sign Up
      .addCase(signUpThunk.pending, (state) => {
        state.statuses.signUp = status.PENDING;
        state.errors.signUp = null;
      })
      .addCase(signUpThunk.fulfilled, (state, { payload }) => {
        state.statuses.signUp = status.FULFILLED;
        state.id = payload.id;
        state.avatar = payload.avatar;
        state.email = payload.email;
        state.username = payload.username;
      })
      .addCase(signUpThunk.rejected, (state, { payload }) => {
        state.statuses.signUp = status.REJECTED;
        state.errors.signUp = payload;
      })
      // SignIn
      .addCase(signInThunk.pending, (state) => {
        state.statuses.signIn = status.PENDING;
        state.errors.signIn = null;
      })
      .addCase(signInThunk.fulfilled, (state, { payload }) => {
        state.statuses.signIn = status.FULFILLED;
        state.id = payload.id;
        state.avatar = payload.avatar;
        state.email = payload.email;
        state.username = payload.username;
      })
      .addCase(signInThunk.rejected, (state, { payload }) => {
        state.statuses.signIn = status.REJECTED;
        state.errors.signIn = payload;
      })
      // Sign Out
      .addCase(signOutThunk.pending, (state) => {
        state.statuses.signOut = status.PENDING;
        state.errors.signOut = null;
      })
      .addCase(signOutThunk.fulfilled, (state) => authInitialState)
      .addCase(signOutThunk.rejected, (state, { payload }) => {
        state.statuses.signOut = status.REJECTED;
        state.errors.signOut = payload;
      }),
});

export const { updateUser } = authSlice.actions;

export default authSlice.reducer;
