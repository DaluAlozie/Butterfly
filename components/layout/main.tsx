import type { NextPage } from 'next'
import { AppProps } from 'next/app'
import React, { FC } from "react"

type Props = {
    children: JSX.Element,
};

const Main: NextPage<Props> = ({ children } : Props) => {
  return (
    <div className='min-h-screen min-w-fit '>
      {children}
    </div>
  )
}

export default Main
