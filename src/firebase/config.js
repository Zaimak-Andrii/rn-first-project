import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, initializeAuth } from 'firebase/auth';
import { getReactNativePersistence } from 'firebase/auth/react-native';
import { getStorage } from 'firebase/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDum-T6j5LM96pg-7gODuxnTzF-5RFTR2A',
  authDomain: 'react-native-posts-d8ad8.firebaseapp.com',
  databaseURL: 'https://react-native-posts-d8ad8-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'react-native-posts-d8ad8',
  storageBucket: 'react-native-posts-d8ad8.appspot.com',
  messagingSenderId: '690175620715',
  appId: '1:690175620715:web:2a52d1bc270914ee40e32e',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
