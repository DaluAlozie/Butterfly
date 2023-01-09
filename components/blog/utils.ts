import { doc,collection, getDocs, query, orderBy, getDoc, 
        updateDoc, Timestamp, addDoc, setDoc, deleteDoc } from "firebase/firestore"; 
import { db } from "../../firebase/config";

type PostProps = {
    id: string,
    title: string,
    content: string,
    timeStamp: { seconds: number, nanoseconds:  number},
    author: string,
};

type UpdateProps = {
    title: string,
    content: string,
    author: string,
};

type PublishProps = {
    title: string,
    content: string,
    author: string,
    timeStamp: Timestamp
};

type DraftProps = {
    title: string,
    content: string,
    author: string,
};



const getPosts = async () => {
    try {
        const q = query(collection(db, "Posts"),orderBy("timeStamp","desc"));
        const querySnapshot = await getDocs(q);  
        const docs = querySnapshot.docs.map((doc) => Object.assign(doc.data(), { id: doc.id }));
        return docs
        
    } catch (error) {
        return []
    }
}

const getPost = async ( id: string ) => {
    try{
        const snap = await getDoc(doc(db, 'Posts', id))

        if (snap.exists()) {
            return Object.assign(snap.data(), { id: id })
        }
        else {
            return undefined
        }
    }
    catch(e){
        return undefined
    }
}

const getDraft = async (id: string | undefined) => {

    if (!id) return undefined;
    
    try{              
        const snap = await getDoc(doc(db, `Users/${id}/Drafts/draft`))
        
        if (snap.exists()) {
            return snap.data() as DraftProps
        }
        else {
            return undefined
        }
    }
    catch(e){
        console.error(e)
        return undefined
    }
}

const updatePost = async (id: string, props: UpdateProps ) => {
    try {
        await updateDoc(doc(db, "Posts", id), props)
         return true
    } catch (error) {
        return false
    }
}
const publishDraft = async (props: PublishProps ) => {
    try {
        await addDoc(collection(db, "Posts"), props)
        return true
        
    } catch (error) {
        return false
    }
}

const saveDraft = async (id: string, props: DraftProps ) => {
    try {        
        await setDoc(doc(db, `Users/${id}/Drafts/draft`), props)        
        return true

    } catch (error) {
        console.error(error)

        return false
    }
}

const deletePost = async (id: string ) => {
    try {        
        await deleteDoc(doc(db, `Posts/${id}`))      
        return true

    } catch (error) {
        return false
    }
}


export type { PostProps, UpdateProps, PublishProps, DraftProps }
export { getPost ,getPosts, updatePost, publishDraft, saveDraft, getDraft, deletePost }
