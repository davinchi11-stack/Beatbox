import {auth} from '../../config/firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'
import {db} from '../../config/firebase';
import {addDoc, collection, serverTimestamp} from 'firebase/firestore'
import { DiaplayPost } from '../DisplayPost/DisplayPost';


interface formData {
  'postData': string
}

export function ContentBody () {

    const [user] = useAuthState(auth)
    const postRef = collection(db, 'post' )


    const schema = yup.object().shape({
        'postData': yup.string().required('post field can not be empty').min(2, 'too short').max(250, 'max reached')
    })

    const {register, handleSubmit, formState:{errors}} = useForm({
       resolver:yupResolver(schema)
    })

    const onSubmit = async (data: formData) => {
       await addDoc(postRef, {
            ...data,
            username:user?.displayName,
            userId:user?.uid,
            photo:user?.photoURL,
            timestamp: serverTimestamp()
        })
        window.location.reload()

    }




    return (
        <div className="content-body">
            <div className="post">
                <div className="post-area">
                    <img src={user?.photoURL || ''} alt="" />
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <textarea placeholder="Whats happening?" {...register("postData")} ></textarea>
                    <p>{errors.postData?.message}</p>
                     <div className="post-add"> 
                         <input type="submit" value="post" />
                     </div>
                    </form>
                </div>
              
            </div>
            <div className="display-boss">
               <DiaplayPost/>
             </div>
        </div>
    )
}