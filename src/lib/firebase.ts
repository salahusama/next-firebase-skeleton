import { initializeApp, getApps } from 'firebase/app'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAA9Z58AsPMJNTUDnDlQQ-G325aI0TnUtg",
  authDomain: "fireship-nextjs-1f4fe.firebaseapp.com",
  projectId: "fireship-nextjs-1f4fe",
  storageBucket: "fireship-nextjs-1f4fe.appspot.com",
  messagingSenderId: "658231251847",
  appId: "1:658231251847:web:dcbc993c741306faebb922",
  measurementId: "G-K8WC48CYJX"
}

// Initialize the app only once
if (!getApps().length) {
  initializeApp(firebaseConfig)
}

//////////////////////////////////
// Firebase Auth
//////////////////////////////////
export const auth = getAuth()
export const googleAuthProvider = new GoogleAuthProvider()
export const signInWithGoogle = async () => {
  await signInWithPopup(auth, googleAuthProvider)
}

export const firestore = getFirestore()
export const storage = getStorage()
