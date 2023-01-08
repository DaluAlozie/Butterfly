import type { NextPage, GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import Head from 'next/head';
import { getPosts, getPost, PostProps } from '../../../components/blog/utils'
import { Timestamp } from "firebase/firestore"; 
import Link from 'next/link';
import { useRouter } from 'next/router';
import { UserContext } from '../../../components/user/UserContext';
import { useContext } from 'react';

type AppProps = {
  singlePost: string
}

const BlogPost: NextPage<AppProps> = ({ singlePost }: InferGetStaticPropsType<typeof getStaticProps>) => {
    const {id, title ,content, timeStamp, author }: PostProps = JSON.parse(singlePost)
    const Date: Timestamp = new Timestamp(timeStamp.seconds,timeStamp.nanoseconds);
    const user = useContext(UserContext)
    const router = useRouter()

    return (
        <div className='flex flex-col items-center justify-start w-full min-h-screen p-1 mt-16 h-max '>
        <Head>
            <title>Blog Post - Butterfly</title>
        </Head>
        <div className='w-11/12 h-max mb-10 flex flex-row justify-end'>
                {
                    user && (
                        <div >
                            <Link href={`/blog/${id}/edit`}
                            className='w-36 h-16 rounded-2xl text-center flex flex-col justify-center sans-regular text-2xl shadow-md border-4'>
                                <b>Edit</b>
                            </Link>
                        </div>

                    )
                }

        </div>
        <div className='w-11/12 p-5 sm:w-6/12 blog-post h-max rounded-2xl'>
            <div className='text-4xl xl:text-7xl sans-bold'>
            {title}
            </div>
            <div className='w-full my-5 text-2xl h-max sans-regular xl:text-3xl'>
            {content}
            </div>
            <div className='sans-light-italic'>
            {author}
            </div>
            <div className='sans-light-italic'>
              {Date.toDate().toDateString()}
            </div>
        </div>
    
        </div>
    )  
}

export async function getStaticProps(context: GetStaticPropsContext) {

  const id = context.params?.id
  if (!id){
      return{
        notFound: true,
        revalidate: 30
    }
  }
  let post = await getPost(id as string)

  if (!post){
    return{
      notFound: true,
      revalidate: 30
    }
  }
  

  return {
    props: {
      singlePost:  JSON.stringify(post)
    },
    revalidate: 30
    // will be passed to the page component as props
    }
  }


export async function getStaticPaths() {

  const allPosts = await getPosts()
  const paths = allPosts.map((post) => ({
    params: { id: post.id },
  }))
  
  return { paths, fallback: 'blocking' }
}

export default BlogPost
