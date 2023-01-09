import type { NextPage } from 'next'
import { Timestamp } from "firebase/firestore"; 
import { PostProps } from "./utils"
import { useState, useRef } from 'react';
import Link from 'next/link';

interface Props{
    props: PostProps
}


const Post: NextPage<Props> = ({props}) => {
    const {id, title ,content, timeStamp, author } = props
    const Date: Timestamp = new Timestamp(timeStamp.seconds,timeStamp.nanoseconds);
    const postRef = useRef(null!)

    return (
        <div ref={postRef} className='relative flex flex-col p-12 pt-16 mb-10 text-black sm:ml-24 rounded-3xl post-collapsed'>
            <div className='absolute z-0 w-full h-full post-background '></div>
            <Link passHref={true} href={`/blog/${id}`} className='absolute right-0 z-50 rounded-full post-expand-btn top-10 sm:top-16 sm:right-3'></Link>
            <div className='z-10 w-full mt-8 mb-10 ml-10 sm:mt-20 text-7xl post-title sans-bold'>
                {title}
            </div>
            <div className='z-10 w-full ml-10 overflow-hidden text-black text-3xl h-5/6 post-content sans-regular whitespace-pre'>
                {content}
            </div>        
            <div className='z-10 flex flex-row self-center justify-between w-10/12 mt-5 ml-10 text-center text-black text:sm post-metadata sans-light-italic'>
                <span><i>{author}</i></span>
                <span className='ml-5'><i>{Date.toDate().toDateString()}</i></span>
            </div>
            <div className='self-center w-11/12 h-1 bg-white'></div>
        </div>
    )
}

export default Post
