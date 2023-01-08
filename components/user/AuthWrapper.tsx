import type { NextPage } from 'next'
import React, { FC, useEffect } from "react"
import { toast } from 'react-hot-toast';
import { UserContext } from './UserContext';
import { useContext } from 'react';
import { useRouter } from 'next/router';

type PageProps = {
    children: JSX.Element,
};

//Wraps pages that requires users to be signed in 

const AuthWrapper: NextPage<PageProps> = ({ children } : PageProps) => {
    const router = useRouter()
    const user = useContext(UserContext)
    useEffect( () => {
        if (!user) {
            toast.error("Access not allowed")
            router.back()
        }
    },[user,router])

  return (
    <>   
        {
            user && children
        }
    </>

  )
}

export default AuthWrapper
