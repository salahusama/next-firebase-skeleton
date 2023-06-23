import { signInWithGoogle } from "@/lib/firebase"

type SignInButtonProps = {
  onSignIn?: Function,
}

export default function SignInButton({ onSignIn }: SignInButtonProps) {
  return (
    <button className="btn-google" onClick={() => signInWithGoogle(onSignIn)}>
      <img src="/images/google.png" /> Sign In With Google
    </button>
  )
}
