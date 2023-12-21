import React from 'react'
import SignInButton from './SignInButton'
import Link from 'next/link'

const AppBar = () => {
  return (
    <div className='flex flex-row justify-between items-center w-full h-10 bg-sky-500 px-2'>
      <div className='flex w-auto gap-4'>
        <Link href='/'>Home</Link>
        <Link href='/posts'>Posts</Link>
      </div>
      <div className='w-auto'>
        <SignInButton />
      </div>
    </div>
  )
}

export default AppBar
