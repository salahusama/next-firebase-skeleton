import { initializeApp, getApps } from 'firebase/app'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey:            process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain:        process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId:         process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket:     process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId:             process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId:     process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
}

// Initialize the app only once
if (!getApps().length) {
  initializeApp(firebaseConfig)
}

//////////////////////////////////
// Firebase Auth /////////////////
//////////////////////////////////
export const auth = getAuth()
export const googleAuthProvider = new GoogleAuthProvider()
export const signInWithGoogle = async (callback?: Function) => {
  await signInWithPopup(auth, googleAuthProvider)
  callback && callback()
}

export const firestore = getFirestore()
export const storage = getStorage()
