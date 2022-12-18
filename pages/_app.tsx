import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Main from '../components/layout/main';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';

function MyApp({ Component, pageProps, router }: AppProps) {
  
  return(
    <div className='w-screen h-max bg-sky-50 min-w-max min-h-screen flex flex-col justify-between'>
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
