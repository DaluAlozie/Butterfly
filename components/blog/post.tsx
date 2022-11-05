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
    <div className='bg-blue-300 rounded-md m-10 p-7 min-w-max w-7/12 font-sans text-gray-100'>
        <div className='mt-2'>
            {title}
        </div>
        <div className='mt-2'>
            {content}
        </div>
        
        <div className='text-12 text-gray-500 mt-5 justify-self-end w-full flex flex-row justify-between'>
            <span><i>{author}</i></span>
            <span><i>{Date.toDate().toDateString()}</i></span>
        </div>
        <hr />
    </div>
  )
}

export default Post
