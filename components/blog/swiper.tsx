import type { NextPage } from 'next'
import { Timestamp} from "firebase/firestore"; 
import {PostType} from "./props"
import { useState } from 'react';
import React from 'react';
type Props = {
  children: JSX.Element,
  width: number

};

const Swiper: NextPage<Props> = ({children}) => {
  const slides: JSX.Element[] = children.props.children
  let caroselTemp: JSX.Element[] = []
  for (let i=0; i<3 ; i++ ){
    caroselTemp.push(slides[i])
  }
  const [carosel,  setCarosel] = useState<JSX.Element[]>(caroselTemp)
  let rightIndex: number = 2
  const swipeRight = () =>{
    if (rightIndex >= slides.length) return

    else{
      console.log("swiping right")
      rightIndex += 1
      caroselTemp.shift()
      caroselTemp.push(slides[rightIndex])
      caroselTemp = [caroselTemp[0],caroselTemp[1],caroselTemp[2]]

      setCarosel(caroselTemp)
      console.log(rightIndex)
    }
  }
  const swipeLeft = () =>{
    if (rightIndex <= 2) return

    else{
      console.log("swiping left")
      rightIndex -= 1
      caroselTemp.pop()
      caroselTemp.unshift(slides[rightIndex- 1])
      setCarosel(caroselTemp)

    }
  }

  return (
    <div  className='flex flex-row team-swiper overflow-hidden'>
      <div className='mt-32'>
        <button onClick={swipeLeft}>
          left
        </button>
      </div>
      <div className='flex flex-row team-swiper overflow-hidden'>
        <div id="swiper-wrapper" className='justify-evenly w-max lg:inline-flex lg:flex-grow lg:w-auto'>
          {carosel.map( (element:JSX.Element) =>element)}
        </div>
      </div>

      <div className='mt-32'>
        <button onClick={swipeRight}>
          right
        </button>
      </div>
    </div>

  )
}

export default React.memo(Swiper)
