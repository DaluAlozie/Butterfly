import type { NextPage } from 'next'
import { AppProps } from 'next/app'
import React, { FC } from "react"
import { Toaster } from 'react-hot-toast';

type Props = {
    children: JSX.Element,
};

const Main: NextPage<Props> = ({ children } : Props) => {
  return (
    <div className='w-full min-h-screen h-max zIndex-40'>
        <Toaster
            toastOptions={{
              duration: 3700,

              success: {
                style: {
                  background: '#8bfa69',
                },
              },
              error: {
                style: {
                  background: '#fc6f6f',
                },
              },
            }}
          />
      {children}
    </div>
  )
}

export default Main
