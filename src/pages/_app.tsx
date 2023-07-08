import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'
import { UserAuthProvider } from '@/lib/hooks/user'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserAuthProvider>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </UserAuthProvider>
  )
}
