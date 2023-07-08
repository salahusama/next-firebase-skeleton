import { useAuthState } from 'react-firebase-hooks/auth'
import { ReactNode, useEffect, useState } from 'react'
import { auth, firestore } from '@/lib/firebase'
import { doc, getDoc } from 'firebase/firestore'
import { UserContext, UserContextType, UserData } from '../context/user'

function useUserAuth(): UserContextType {
  const [user] = useAuthState(auth)
  const [userData, setUserData] = useState<UserData>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoading(true)

      if (user) {
        getDoc(doc(firestore, 'users', user.uid)).then(snap => {
          setUserData(snap.data() as UserData)
          setIsLoading(false)
        })
      } else {
        setUserData(null)
        setIsLoading(false)
      }
    })

    return unsubscribe
  }, [user])

  return { user, userData, isLoading }
}

export function UserAuthProvider({ children }: { children: ReactNode }) {
  const userAuth = useUserAuth()
  return (
    <UserContext.Provider value={userAuth}>
      {children}
    </UserContext.Provider>
  )
}
