import { useUserContext } from "@/lib/context/user"
import SignInButton from "./SignInButton"
import SignOutButton from "./SignOutButton"
import UsernameForm from "./UsernameForm"
import Loader from "@/components/Loader"

export default function EnterPage() {
  const { user, username, isLoading } = useUserContext()

  return (
    <main>
      <Loader show={isLoading} />
      {!isLoading && (user
        ? !username ? <UsernameForm /> : <SignOutButton />
        : <SignInButton />
      )}
    </main>
  )
}
