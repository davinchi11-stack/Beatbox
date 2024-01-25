import {auth, provider} from '../config/firebase';
import {signInWithPopup} from 'firebase/auth'
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom'
import {useAuthState} from 'react-firebase-hooks/auth'

export const useLoginAuth = () => {
    const navigate = useNavigate()
    const [user] = useAuthState(auth)

    const handleSignIn = async () => {
          await signInWithPopup(auth, provider)
          navigate("/home")
      }
  
      const notify = () => {
        toast.warn("Stil Under Production")
      }

    return {handleSignIn , notify, user, navigate}
}