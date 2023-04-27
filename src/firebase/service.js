import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from 'firebase/auth';
import { auth, db, storage } from './config';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { addDoc, arrayUnion, collection, doc, updateDoc } from 'firebase/firestore';
import { getBlobFromUri } from '../helpers';

export const signUpService = async ({ email, password }) => {
  const result = await createUserWithEmailAndPassword(auth, email, password);

  return result?.user;
};

export const signInService = async ({ email, password }) => {
  const result = await signInWithEmailAndPassword(auth, email, password);

  return result?.user;
};

export const signOutService = async () => {
  await signOut(auth);
};

export const updateUserInfoService = async ({ displayName, photoURL }) => {
  await updateProfile(auth.currentUser, { displayName, photoURL });
  const user = auth.currentUser;

  return user;
};

export const uploadImageService = async (folder, blob, name) => {
  const storageRef = ref(storage, `images/${folder}/${name}`);
  await uploadBytesResumable(storageRef, blob);
  const url = await getDownloadURL(storageRef);

  return url;
};

export const addPostService = async (data) => {
  const { photo, ...otherData } = data;

  const blob = await getBlobFromUri(photo);

  const photoURL = await uploadImageService('posts', blob, `${data.owner.id}-${Date.now()}`);

  const post = await addDoc(collection(db, 'posts'), { ...otherData, photoURL });

  return post.id;
};

export const addCommentToPostService = async (postId, data) => {
  const ref = doc(db, 'posts', postId);

  await updateDoc(ref, {
    comments: arrayUnion(data),
  });
};
