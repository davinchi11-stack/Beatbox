import  googleLogo from '../../assets/google-logo-removebg-preview.png'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import '../../custom-toast-styles.scss'
import { Stack } from '@mui/material';
import { useLoginAuth } from '../../Hooks/useLognin';
import Button from '@mui/material/Button';
import { CreateAcount } from './createAccount';


export function LoginButtonPlus () {
    const {user , handleSignIn , navigate} = useLoginAuth()
    return (
        <div className='half'>
             <ToastContainer/>
           <Stack
           marginTop={{xs: 4}}
           spacing={4}
           alignItems={'center'}
           > 
             <div className="words">
               <h1>Changing Worlds, Start Today</h1>
             </div>

            <div className="sign">
           { !user? <Button variant='outlined' startIcon={<img src={googleLogo} alt="" />} onClick={handleSignIn} className="google">
                Sign up with Google 
            </Button> :
            <Button variant='contained' onClick={()=> navigate("/home")} className='create'>Go Back to Home</Button> }
            { !user && <p className='or'>or</p>}
               <CreateAcount/>
            
         </div>
         { !user && <p className='agree'>By signing up, you agree to the <span>Terms of Service</span> and <span>Privacy Policy</span></p>}
         </Stack>
        </div>
    )
}