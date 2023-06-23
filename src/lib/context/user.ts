import type { User } from 'firebase/auth'
import { createContext, useContext } from 'react'

export type UserContextType = {
  user: User | null | undefined,
  username: string | null,
  isLoading: boolean
}

const defaultUserContext: UserContextType = {
  user: null,
  username: null,
  isLoading: true,
}

export const UserContext = createContext(defaultUserContext)
export const useUserContext = () => useContext(UserContext)
