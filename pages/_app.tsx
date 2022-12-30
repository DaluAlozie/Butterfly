import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Main from '../components/layout/main';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from 'next/router';
import { loggedInContext } from '../components/signIn/loggedInContext';
import { auth } from '../firebase/config';
export default function MyApp({ Component, pageProps }: AppProps) {

  const [ loggedIn, setLoggedIn ] = useState<boolean>(false)


  useEffect(()=>{
    
    //Scroll event listener to show and hide navbar
    const user = auth.currentUser

    setLoggedIn((user)? true : false)

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true)
      } else {
        setLoggedIn(false)
      }
    });  
  },[])

  const router = useRouter()

  return(
    <div className='flex flex-col justify-between w-screen min-h-screen h-max bg-sky-50 min-w-max'>
      <loggedInContext.Provider value={loggedIn}>
        {
          (
            router.route !== "/") && (
            <Header />
          )
        }
        <Main>
        <Component {...pageProps} />
        </Main>
        {
          (
            router.route !== "/") && (
            <Footer></Footer>
          )
        }
      </loggedInContext.Provider>
    </div>
  ) 
}

