
import { RedirectToSignIn, SignedIn, SignedOut } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs/server'
import React from 'react'

type Props = {}

const page = async (props: Props) => {

    const user = await currentUser();

    return (
        <div>
            {user?.firstName}
            <div>
                <SignedIn>
                    <div>
                        <h2>Protected Component A</h2>
                        <p>Welcome to the protected component! Only authenticated users can see this.</p>
                    </div>
                </SignedIn>
                <SignedOut>
                    <h2>kuch nhi dikhega. Pehle sign in kar</h2>
                </SignedOut>
            </div>
        </div>
    )
}

export default page;