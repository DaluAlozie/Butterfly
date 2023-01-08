import type { NextPage, GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { getPost, PostProps, PublishProps, publishDraft, saveDraft, DraftProps, getDraft} from '../../components/blog/utils'
import { useState, ChangeEvent, useContext, useEffect } from 'react'
import { Timestamp } from 'firebase/firestore'
import { toast } from 'react-hot-toast'
import AuthWrapper from '../../components/user/AuthWrapper'
import { UserContext } from '../../components/user/UserContext'

type PageProps = {
  draftParam: string
}

const buttonClass = "w-28 h-16 sm:w-40 sm:h-20 rounded-3xl text-center items-center flex flex-col justify-center sans-regular text-md sm:text-2xl shadow-md border-4"

const CreatePost: NextPage = () => {
  const [ title, setTitle ] = useState<string>("")
  const [ content, setContent ] = useState<string>("")
  const [ author, setAuthor ] = useState<string>("")

  const user = useContext(UserContext)

  useEffect(()=> {    
    getDraft(user?.id|| "error").then((res) => {
      if (res){
        const draft = res     
        setTitle(draft.title)
        setContent(draft.content)
        setAuthor(draft.author)   
      }  
    })    
  },[user])

  const textAreaAdjust = (e:ChangeEvent<HTMLTextAreaElement>)=> {
    e.target.style.height = "1px";
    e.target.style.height = (20+e.target.scrollHeight)+"px";
  }

  const handleSaveDraft = async () => {
    const props: DraftProps = {
      title,
      content,
      author,
    }
    const res = await saveDraft(user?.id||"", props);
    
    if (res) toast.success("Draft Saved")
    else toast.error("Something went wrong")
  }

  const handlePublishDraft = async () => {
    const props: PublishProps = {
      title,
      content,
      author,
      timeStamp: Timestamp.now()
    }
    const res = await publishDraft(props);
    if (res) toast.success("Draft Published")
    else toast.error("Something went wrong")
  }

  return (
    <div className='w-full h-max min-h-screen flex flex-col justify-start items-center my-32'>
      <div className='w-11/12 rounded-3xl blog-post p-10'>
        <div>
          <input className='text-4xl xl:text-7xl sans-bold w-full accent-neutral-400	focus:outline-none' 
          type="text" defaultValue={title}  
          onChange={(e)=>{setTitle(e.target.value)}}/>
        </div>
        <div>
          <textarea className='w-full my-5 text-2xl h-max sans-regular xl:text-3xl resize-none focus:outline-none'
          defaultValue={content} cols={1} rows={1} 
          onChange={(e)=>{setContent(e.target.value); textAreaAdjust(e)}}
          ></textarea>
        </div>
        <div>
        <input className='sans-light-italic focus:outline-none'
          type="text" defaultValue={author}  onChange={(e)=>{setAuthor(e.target.value)}}/>
        </div>
      </div>
      <div className='w-11/12 flex flex-row justify-between mt-10'>
        <button
          onClick={handlePublishDraft}
          className={buttonClass}
        >
          <b>Publish Draft</b>
        </button>
        <button
          onClick={handleSaveDraft}
          className={buttonClass}
        >
          <b>Save Draft</b>
        </button>
      </div>
    </div>

  )
}
  
export default CreatePost
