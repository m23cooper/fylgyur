import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  TwitterAuthProvider,
} from 'firebase/auth';
import { auth } from '@/database/firebase';

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const twitterProvider = new TwitterAuthProvider();
const githubProvider = new GithubAuthProvider();

const _service = {
  signInWithGoogle: () => signInWithPopup(auth, googleProvider),
  signInWithFacebook: () => signInWithPopup(auth, facebookProvider),
  signInWithTwitter: () => signInWithPopup(auth, twitterProvider),
  signInWithGithub: () => signInWithPopup(auth, githubProvider),
  registerWithEmail: ({ email, password }) =>
    createUserWithEmailAndPassword(auth, email, password),
  loginWithEmail: ({ email, password }) =>
    signInWithEmailAndPassword(auth, email, password),
  logout: () => signOut(auth),
};

export const userService = _service;
