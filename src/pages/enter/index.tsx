import { useUserContext } from "@/lib/context/user"
import SignInButton from "./SignInButton"
import SignOutButton from "./SignOutButton"
import UsernameForm from "./UsernameForm"
import Loader from "@/components/Loader"

export default function EnterPage() {
  const { user, userData, isLoading } = useUserContext()

  return (
    <main>
      <Loader show={isLoading} />
      {!isLoading && (user
        ? !userData ? <UsernameForm /> : <SignOutButton />
        : <SignInButton />
      )}
    </main>
  )
}
