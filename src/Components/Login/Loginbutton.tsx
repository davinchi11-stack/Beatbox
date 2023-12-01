 import  googleLogo from '../../assets/google-logo-removebg-preview.png'
 import {auth, provider} from '../../config/firebase';
 import {signInWithPopup} from 'firebase/auth'
 import {useNavigate} from 'react-router-dom'
 import {useAuthState} from 'react-firebase-hooks/auth'
 import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import '../../custom-toast-styles.scss'



export function LoginButton(){
    const [user] = useAuthState(auth)

    const navigate = useNavigate()
    
    const handleSignIn = async () => {
       await signInWithPopup(auth, provider)
       navigate("/home")
    }

    const notify = () => {
      toast.warn("Stil Under Production")
    }

    return(
        <div className='half'>
             <ToastContainer/>
             <div className="words">
             <h1>Changing Worlds</h1>
               <h3>Start Today.</h3>
             </div>
       

         <div className="sign">
           { !user? <button onClick={handleSignIn} className="google">
            <img src={googleLogo} alt="" />
                Sign up with Google 
            </button> :
            <button onClick={()=> navigate("/home")} className='create'>Go Back to Home</button> }
            { !user && <p className='or'>or</p>}
           { !user && <button onClick={notify} className='create'>Create account</button> }
         </div>
         { !user && <p className='agree'>By signing up, you agree to the <span>Terms of Service</span> and <span>Privacy Policy</span></p>}
        </div>
    )
}