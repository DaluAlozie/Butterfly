import type { NextPage } from 'next'
import { Timestamp} from "firebase/firestore"; 
import {PostType} from "./props"

interface Props{
    props: PostType
}

const Post: NextPage<Props> = ({props}) => {
    const {title ,content, timeStamp, author } = props
    const Date: Timestamp = new Timestamp(timeStamp.seconds,timeStamp.nanoseconds);



  return (
    <div className='flex flex-col p-12 pt-16 ml-24 text-gray-100 bg-blue-300 sm:ml-24 rounded-3xl post-closed '>
        <div className='w-full mb-10 text-4xl sm:mt-10 sm:text-7xl post-title sans-bold'>
            {title}
        </div>
        <div className='w-full overflow-hidden text-xl sm:mt-10 sm:text-3xl h-5/6 post-content sans-regular'>
            {content}
        </div>        
        <div className='flex flex-row self-center justify-between w-10/12 mt-5 text-center text-gray-500 text:sm post-metadata sans-light-italic'>
            <span><i>{author}</i></span>
            <span className='ml-5'><i>{Date.toDate().toDateString()}</i></span>
        </div>
        <div className='self-center w-11/12 h-1 bg-white'></div>
    </div>
  )
}

export default Post
