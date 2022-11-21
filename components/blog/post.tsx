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
    <div className='w-7/12 m-10 font-sans text-gray-100 bg-blue-300 rounded-md p-7 min-w-max'>
        <div className='mt-2'>
            {title}
        </div>
        <div className='mt-2'>
            {content}
        </div>
        
        <div className='flex flex-row justify-between w-full mt-5 text-gray-500 text-12 justify-self-end'>
            <span><i>{author}</i></span>
            <span className='ml-5'><i>{Date.toDate().toDateString()}</i></span>
        </div>
        <hr />
    </div>
  )
}

export default Post
