import type { NextPage } from 'next'
import { AppProps } from 'next/app'
import React, { FC } from "react"

type Props = {
    children: JSX.Element,
};

const Main: NextPage<Props> = ({ children } : Props) => {
  return (
    <div className='w-full h-full min-h-screen bg-sky-50 min-w-max'>
      {children}
    </div>
  )
}

export default Main
