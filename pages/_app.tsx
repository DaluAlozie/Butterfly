import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Main from '../components/layout/main';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from 'next/router';
import { UserContext } from '../components/user/UserContext';
import { UserType } from '../components/user/UserContext';
import { getAuth } from 'firebase/auth';

export default function MyApp({ Component, pageProps }: AppProps) {

  const [ user, setUser ] = useState<UserType | null >(null)


  useEffect(()=>{
    
    //Scroll event listener to show and hide navbar
    
    const auth = getAuth()
    onAuthStateChanged(auth, async (user) => {                  
      if (user) {
        const res = await fetch("/api/getUser", {
          method: "POST",
          headers: new Headers({ "Content-Type": "application/json" }),
          credentials: "same-origin",
          body: JSON.stringify({ email: user.email }),
        })
        .then((res) => res.json())        
        setUser(res)

      } else {
        setUser(null)
      }
    });  
  },[])
  
  const router = useRouter()

  return(
    <div className='flex flex-col justify-between w-screen min-h-screen bg-white h-max body'>

      <UserContext.Provider value={user}>
        {
          (
            router.route !== "/") && (
            <Header />
          )
        }
        <Main>
        <Component {...pageProps} />
        </Main>
     
        <Footer></Footer>
         
      </UserContext.Provider>
    </div>
  ) 
}

