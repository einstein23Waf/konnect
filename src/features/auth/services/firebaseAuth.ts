import { FIREBASE_AUTH } from "@/src/common/services/firebase";
import {
  ApplicationVerifier,
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInAnonymously,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithPhoneNumber,
  PhoneAuthProvider,
  User,
} from "firebase/auth";

const auth = FIREBASE_AUTH;

export const signUp = async (
  email: string,
  password: string
): Promise<User> => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  return userCredential.user;
};

export const signIn = async (
  email: string,
  password: string
): Promise<User> => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  return userCredential.user;
};

export const signInWithGoogle = async (): Promise<User> => {
  const provider = new GoogleAuthProvider();
  const userCredential = await signInWithPopup(auth, provider);
  return userCredential.user;
};

export const signInWithFacebook = async (): Promise<User> => {
  const provider = new FacebookAuthProvider();
  const userCredential = await signInWithPopup(auth, provider);
  return userCredential.user;
};

export const signInAsGuest = async (): Promise<User> => {
  const userCredential = await signInAnonymously(auth);
  return userCredential.user;
};

export const signInWithPhone = async (
  phoneNumber: string,
  appVerifier: ApplicationVerifier
): Promise<any> => {
  return signInWithPhoneNumber(auth, phoneNumber, appVerifier);
};

export const resetPassword = async (email: string): Promise<void> => {
  await sendPasswordResetEmail(auth, email);
};

export const signOut = async (): Promise<void> => {
  await auth.signOut();
};
