import { useAuthState } from 'react-firebase-hooks/auth'
import { useEffect, useState } from 'react'
import { auth, firestore } from '@/lib/firebase'
import { doc, getDoc } from 'firebase/firestore'
import { UserData } from '../context/user'

export function useUserData(): UserData {
  const [user] = useAuthState(auth)
  const [username, setUsername] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoading(true)

      if (user) {
        getDoc(doc(firestore, 'users', user.uid)).then(snap => {
          setUsername(snap.data()?.username)
          setIsLoading(false)
        })
      } else {
        setUsername(null)
        setIsLoading(false)
      }
    })

    return unsubscribe
  }, [user])

  return { user, username, isLoading }
}
