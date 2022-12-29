import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Main from '../components/layout/main';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';
import { useEffect } from 'react';
import { onAuthStateChanged  } from "firebase/auth";
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter()
  return(
    <div className='flex flex-col justify-between w-screen min-h-screen h-max bg-sky-50 min-w-max'>
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
    </div>
  ) 
}

export default MyApp
