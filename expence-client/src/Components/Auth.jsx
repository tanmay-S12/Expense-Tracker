import React from 'react'
import { SignedIn, SignedOut, SignInButton, SignOutButton, SignUpButton } from "@clerk/clerk-react";
import ExpenseTracker from './ExpenseTracker';

const afterSignInUrl = '/Dashboard';




const Auth = () => {
    return (
        <div className='flex flex-col w-full h-screen border-8 border-black'>
            {/* <SignedOut > */}
            <div className=' mx-auto' >
                <h1 className="text-3xl font-bold underline my-3   mx-auto ">This is Auth Page!</h1>
            </div>

            <div className=' mx-auto'>
                <SignInButton fallbackRedirectUrl="/dashboard"  className="bg-blue-600 mx-auto rounded-2xl py-1 px-3 shadow-sm border space-y-6 text-1xl" mode='modal' />
            </div>
            {/* </SignedOut> */}

        </div>
    )
}

export default Auth