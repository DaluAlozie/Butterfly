import type { NextPage, GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { getPost, PostProps, getPosts, updatePost, UpdateProps } from '../../../components/blog/utils'
import { useState, ChangeEvent } from 'react'
import { Timestamp } from 'firebase/firestore'
import { toast } from 'react-hot-toast'
import AuthWrapper from '../../../components/user/AuthWrapper'
import Head from 'next/head'

type PageProps = {
    singlePost: string
}

const EditPost: NextPage<PageProps> = ({ singlePost }: InferGetStaticPropsType<typeof getStaticProps>) => {
    const post: PostProps = JSON.parse(singlePost)
    const { id, timeStamp }: PostProps = post
    const Date: Timestamp = new Timestamp(timeStamp.seconds,timeStamp.nanoseconds);

    const [ title, setTitle ] = useState<string>(post.title)
    const [ content, setContent ] = useState<string>(post.content)
    const [ author, setAuthor ] = useState<string>(post.author)

    const textAreaAdjust = (e:ChangeEvent<HTMLTextAreaElement>)=> {
      e.target.style.height = "1px";
      e.target.style.height = (20+e.target.scrollHeight)+"px";
    }

    const handleSubmit = async () => {
      const props: UpdateProps = {
        title,
        content,
        author
      }
      const res = await updatePost(id, props);
      if (res){
        toast.success("Post Updated")
        toast.loading("Refresh page after 10 seconds to see update", { duration: 5 })
      } 
      else toast.error("Something went wrong")
    }

    return (
      <AuthWrapper>
        <div className='w-full h-max min-h-screen flex flex-col justify-start items-center my-32'>
          <Head>
              <title>Edit Post - Butterfly</title>
          </Head>
          <div className='w-11/12 rounded-3xl blog-post p-10'>
              <div>
                <input placeholder='Title'
                  className='text-4xl xl:text-7xl sans-bold w-full accent-neutral-400	focus:outline-none' 
                  type="text" defaultValue={post.title}  onChange={(e)=>{setTitle(e.target.value)}}/>
              </div>
              <div>
                  <textarea placeholder='Content'
                  className='w-full my-5 text-2xl h-max sans-regular xl:text-3xl resize-none focus:outline-none whitespace-pre'
                  defaultValue={post.content} cols={1} rows={1} 
                  onChange={(e)=>{setContent(e.target.value); textAreaAdjust(e)}}
                  ></textarea>
              </div>
              <div>
              <input placeholder='Author'
              className='sans-light-italic focus:outline-none'
                type="text" defaultValue={post.author}  onChange={(e)=>{setAuthor(e.target.value)}}/>
              </div>
              <div>
              <input className='sans-light-italic'
                type="text" value={Date.toDate().toDateString()} disabled/>
              </div>
          </div>
          <div className='w-11/12 flex flex-row justify-end mt-10'>
            <button
              onClick={handleSubmit}
              className='w-40 h-20 rounded-3xl text-center items-center flex flex-col justify-center sans-regular text-2xl shadow-md border-4'
            >
              <b>Save Changes</b>
            </button>
          </div>
        </div>
      </AuthWrapper>

    )
}

export async function getStaticPaths() {

    const allPosts = await getPosts()
    const paths = allPosts.map((post) => ({
      params: { id: `${post.id}/edit`},
    }))
    
    return { paths, fallback: 'blocking' }
  }

export async function getStaticProps(context: GetStaticPropsContext) {

    const id = context.params?.id

    if (!id){
        return{
          notFound: true,
          revalidate: 10
      }
    }
    let post = await getPost(id as string)
  
    if (!post){
      return{
        notFound: true,
        revalidate: 10
      }
    }
    
  
    return {
      props: {
        singlePost:  JSON.stringify(post)
      },
      revalidate: 10
      // will be passed to the page component as props
      }
}
  
  
export default EditPost
