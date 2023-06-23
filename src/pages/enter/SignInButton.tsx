import { signInWithGoogle } from "@/lib/firebase"

export default function SignInButton() {

  return (
    <button className="btn-google" onClick={signInWithGoogle}>
      <img src="/images/google.png" /> Sign In With Google
    </button>
  )
}
