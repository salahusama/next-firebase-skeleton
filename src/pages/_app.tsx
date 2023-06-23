import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'
import { UserContext } from '@/lib/context/user'
import { useUserData } from '@/lib/hooks/user'

export default function App({ Component, pageProps }: AppProps) {
  const userData = useUserData()

  return (
    <UserContext.Provider value={userData}>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </UserContext.Provider>
  )
}
