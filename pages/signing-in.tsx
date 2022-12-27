import type { NextPage } from 'next'
import { getAuth, isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";
import toast from 'react-hot-toast';
import { use, useEffect } from 'react';
import { useRouter } from 'next/router';
import { db } from '../firebase/config';

const SigningIn: NextPage = () => { 
    const router = useRouter()  
    useEffect( () => {
        const auth = getAuth();
        if (isSignInWithEmailLink(auth, window.location.href)) {
        // Additional state parameters can also be passed via URL.
        // This can be used to continue the user's intended action before triggering
        // the sign-in operation.
        // Get the email if available. This should be available if the user completes
        // the flow on the same device where they started it.
        let email = window.localStorage.getItem('emailForSignIn');
        if (!email) {
            // User opened the link on a different device. To prevent session fixation
            // attacks, ask the user to provide the associated email again. For example:
            email = window.prompt('Please provide your email for confirmation');
        }
        // The client SDK will parse the code from the link for you.
        signInWithEmailLink(auth, (email as string), window.location.href)
            .then((result) => {
            // Clear email from storage.
            window.localStorage.removeItem('emailForSignIn');
            toast.success("Sign in Successful")
            // router.push("/")
            // You can access the new user via result.user
            // Additional user info profile not available via:
            // result.additionalUserInfo.profile == null
            // You can check if the user is new or existing:
            // result.additionalUserInfo.isNewUser
            })
            .catch((error) => {
                console.error(error)
            // Some error occurred, you can inspect the code: error.code
            // Common errors could be invalid email and invalid or expired OTPs.
            });
        }
    })
    return (
        <div className='w-full h-screen p-12 text-4xl'>
            Signing in .......
        </div>
    )
}

export default SigningIn
