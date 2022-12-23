import type { NextPage } from 'next'
import { getAuth, sendSignInLinkToEmail, onAuthStateChanged  } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore"; 
import db from '../firebase/config';
import { actionCodeSettings } from '../components/signIn/codeSettings';
import { useState,useEffect } from 'react';

import toast from 'react-hot-toast';
import { useRouter } from 'next/router';

const SignIn: NextPage = () => {
    const [email, setEmail] = useState<string>("")
    const router = useRouter()
    
    useEffect(() => {
        const auth = getAuth();
        const user = auth.currentUser;

        if (user) {
            router.push("/")
        } else {
        // No user is signed in.
        }
    })

    const handleSignIn = async () => {
        //Check if email is authorised 
        const q = query(collection(db, "Users"), where("email", "==", email));
        const querySnapshot = await getDocs(q);
        
        if (querySnapshot.empty) {
            toast.error("Email not authorised")
        }
        else{
            const auth = getAuth();
            sendSignInLinkToEmail(auth, email, actionCodeSettings)
                .then(() => {
                // The link was successfully sent. Inform the user.
                // Save the email locally so you don't need to ask the user for it again
                // if they open the link on the same device.
                window.localStorage.setItem('emailForSignIn', email);
                toast.success("Link sent to Email")
            })
            .catch((error) => {
                toast.error("Something went Wrong")
                console.error(error.message)
            });
        }
    } 

    return (
        <div className='flex flex-col items-center content-center justify-center w-full h-screen p-12 text-4xl bg-sky-50'>
            <input onChange={(e)=>setEmail(e.target.value)}id="email" type="email" placeholder='Email' 
                className='h-20 px-3 py-2 pl-8 mb-3 text-2xl text-gray-600 border rounded-full shadow outline-none appearance-none w-96 focus:outline-none focus:shadow- '
                />
            <button onClick={handleSignIn} 
                className="h-16 px-5 text-2xl text-white rounded-full w-96 sans-regular bg-custom-nav">
                Send Link
            </button>
        </div>       
    )
}

export default SignIn
