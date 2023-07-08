import Loader from "@/components/Loader"
import { useUserContext } from "@/lib/context/user"
import { useRouter } from "next/router"

export default function UserPage() {
  const router = useRouter()
  const { userData, isLoading } = useUserContext()

  if (isLoading) return <Loader show />

  return (
    <main>
      {userData && userData.username === router.query.username
        ? <h2>Hello, <span className="blue-text">{userData.username}</span>! This is your profile page :)</h2>
        : <h2>This is <span className="blue-text">{router.query.username}</span>'s profile page.</h2>
      }
    </main>
  )
}
