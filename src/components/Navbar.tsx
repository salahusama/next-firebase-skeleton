import { useUserContext } from "@/lib/context/user"
import Link from "next/link"

export default function Navbar() {
  const { user, username, isLoading } = useUserContext()

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href = "/">
            <button className="btn-logo">FEED</button>
          </Link>
        </li>

        {!isLoading && user && username && (
          <>
          <li className="push-left">
            <Link href="/admin">
              <button className="btn-blue">Write Posts</button>
            </Link>
          </li>
          <li>
            <Link href={`/${username}`}>
              <img src={user.photoURL ?? undefined} />
            </Link>
          </li>
          </>
        )}
        
        {!isLoading && !username && (
          <li>
            <Link href="/enter">
              <button className="btn-blue">Log In</button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}
