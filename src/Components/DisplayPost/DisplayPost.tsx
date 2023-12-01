import {useState, useEffect} from 'react';
import {getDocs, collection, query, orderBy} from 'firebase/firestore'
import {db} from '../../config/firebase'
import { Display } from './Diisplay';



export interface Post{
  postData: string;
  photo: string;
  userId: string;
  username: string
  id: string;
  timestamp: any;
  
}

export function DiaplayPost () {
  

  const [postList , setPostList] = useState<Post[] | null>(null);
  const postRef = collection(db, 'post')
  const postQuery = query(postRef, orderBy("timestamp", 'desc'))
 
  const Postfn = async () => {
     const data =  await getDocs(postQuery)
     setPostList(
       data.docs.map((doc)=> ({...doc.data(), id: doc.id})) as Post[]
     )
  }

  useEffect(()=> {
    Postfn()
  }, [])

 
  


    return (
        <div className="display-post">
        {postList?.map((post)=> <Display post={post}/>)}
        </div>
    )
}