import type { User } from 'firebase/auth'
import { createContext, useContext } from 'react'

export type UserData = {
  username: string | null,
} | null

export type UserContextType = {
  user: User | null | undefined,
  userData: UserData | null,
  isLoading: boolean
}

const defaultUserContext: UserContextType = {
  user: null,
  userData: null,
  isLoading: true,
}

export const UserContext = createContext(defaultUserContext)
export const useUserContext = () => useContext(UserContext)
