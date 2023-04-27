import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  signInService,
  signOutService,
  signUpService,
  updateUserInfoService,
  uploadImageService,
} from 'firebase/service';
import { getBlobFromUri } from 'helpers';

export const signUpThunk = createAsyncThunk('auth/signup', async (credentials, { rejectWithValue }) => {
  const { username, avatar, email, password } = credentials;
  let avatarUrl = null;

  try {
    const user = await signUpService({ email, password });

    if (avatar) {
      try {
        const blob = await getBlobFromUri(avatar);
        avatarUrl = await uploadImageService('avatar', blob, user.uid);
      } catch (error) {
        console.error(error);
      }
    }

    const updatedUser = await updateUserInfoService({ displayName: username, photoURL: avatarUrl });

    console.log('Sign Up', user);

    return {
      id: updatedUser.uid,
      username: updatedUser.displayName,
      avatar: updatedUser.photoURL,
      email: updatedUser.email,
    };
  } catch (error) {
    console.error(error);
    return rejectWithValue(error?.message);
  }
});

export const signInThunk = createAsyncThunk('auth/signin', async (credentials, { rejectWithValue }) => {
  const { email, password } = credentials;

  try {
    const user = await signInService({ email, password });

    console.log('Sign In', user);

    return { id: user.uid, username: user.displayName, avatar: user.photoURL, email: user.email };
  } catch (error) {
    console.error(error);
    return rejectWithValue(error?.message);
  }
});

export const signOutThunk = createAsyncThunk('auth/signout', async (_, { rejectWithValue }) => {
  try {
    await signOutService();
  } catch (error) {
    console.error(error);
    return rejectWithValue(error?.message);
  }
});
