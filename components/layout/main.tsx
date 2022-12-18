import type { NextPage } from 'next'
import { AppProps } from 'next/app'
import React, { FC } from "react"

type Props = {
    children: JSX.Element,
};

const Main: NextPage<Props> = ({ children } : Props) => {
  return (
    <div className='w-full h-max min-h-screen bg-sky-max min-w-max zIndex-40'>
      {children}
    </div>
  )
}

export default Main
