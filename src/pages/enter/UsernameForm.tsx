import { useUserContext } from '@/lib/context/user'
import { firestore } from '@/lib/firebase'
import { doc, getDoc, writeBatch } from 'firebase/firestore'
import { useEffect, useState } from 'react'

export default function UsernameForm() {
  const { user, isLoading } = useUserContext()

  const [formValue, setFormValue] = useState('')
  const [isValid, setIsValid] = useState(false)
  const [isChecking, setIsChecking] = useState(false)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.toLowerCase()

    if (val.length <= 15) {
      setFormValue(val)
      setIsValid(false)
    }

    if (formValue.length >= 3) {
      checkUsername(formValue)
    }
  }

  const checkUsername = async (username: string) => {
    setIsChecking(true)

    const snap = await getDoc(doc(firestore, `usernames/${username}`))
    
    setIsValid(!snap.exists())
    setIsChecking(false)
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Create refs for both documents
    const userDoc = doc(firestore, `users/${user!.uid}`)
    const usernameDoc = doc(firestore, `usernames/${formValue}`)

    // Commit both docs together as a batch write.
    const batch = writeBatch(firestore)
    batch.set(userDoc, { username: formValue })
    batch.set(usernameDoc, { uid: user!.uid })
    await batch.commit()
  }

  return !isLoading && (
    <section>
      <form onSubmit={onSubmit}>
        <input name="username" placeholder="username" value={formValue} onChange={onChange} />
        <button type="submit" className="btn-green" disabled={!isValid}>
          Choose
        </button>

        <UsernameMessage username={formValue} isChecking={isChecking} isValid={isValid} />
      </form>
    </section>
  )
}

type UsernameMessageProps = {
  username: string,
  isValid: boolean,
  isChecking: boolean,
}

function UsernameMessage({ username, isValid, isChecking }: UsernameMessageProps) {
  if (username.length < 3) {
    return
  }

  if (isChecking) {
    return <p>Checking...</p>
  } else if (isValid) {
    return <p className="text-success">{username} is available!</p>
  } else {
    <p className="text-danger">That username is taken!</p>
  }
}
