import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Main from '../components/layout/main';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';

function MyApp({ Component, pageProps, router }: AppProps) {
  return(
    <div className='h-screen'>
      <Header/>
      <Main>
      <Component {...pageProps} />
      </Main>
      <Footer/>
    </div>


  ) 
}

export default MyApp
