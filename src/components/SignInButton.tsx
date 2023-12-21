'use client'
import React from 'react'
import { signOut, useSession, signIn } from 'next-auth/react'
const SignInButton = () => {
  const { data: session } = useSession()

  return (
    <div className='flex'>
      {session && session.user ? (
        <div className='flex gap-4'>
          <div>{session.user.name}</div>
          <button onClick={() => signOut()} className='text-red-500'>
            Sign Out
          </button>
        </div>
      ) : (
        <button onClick={() => signIn()}>Sign In</button>
      )}
    </div>
  )
}

export default SignInButton
