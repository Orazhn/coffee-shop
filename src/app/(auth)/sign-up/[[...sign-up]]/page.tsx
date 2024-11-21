import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return  (
    <div className='flex flex-col items-center'> 
      <p className='text-xl text-white'>Hi there, Sign Up please to get started</p>
      <SignUp />
    </div>
  )
}