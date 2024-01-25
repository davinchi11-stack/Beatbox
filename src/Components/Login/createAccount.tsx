import { useLoginAuth } from "../../Hooks/useLognin"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useCheckPass } from "../../Hooks/useFormPassChe";
import { Stack, Typography } from "@mui/material";
import * as yup from 'yup'
import {useForm} from 'react-hook-form'
import {yupResolver} from "@hookform/resolvers/yup"
import '../../Components/homepage/scss/makeStyles.scss'
import { auth } from "../../config/firebase";
import FormHelperText from '@mui/material/FormHelperText';
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

interface SignUp {
    name : string;
    password: string;
    comfirm: string;
    email: string
}



const StyledDialog = styled(Dialog)({
    '& .MuiPaper-root': {
        borderRadius : "10px",
         borderColor : "#1d9bf0"
      }
    
       
})

const StyledTextfield = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        borderRadius: '15px'
      },
      '& .MuiFormHelperText-root': {
        color: 'red', 
        '@media(max-width: 980px)' : {
          fontSize : "10px"
        }
        
      }

})


const StyledFormControl = styled(FormControl)({
    '& .MuiFormHelperText-root': {
        color: 'red', 
        '@media(max-width: 980px)' : {
          fontSize : "9px"
        }
    }
})

const StyledOutlinedInput = styled(OutlinedInput)({
        borderRadius: '15px'
})


export function CreateAcount () {
    
  const  {open , showPassword,  handleClose , handleOpen, handleClickShowPassword , handleMouseDownPassword} = useCheckPass()
  const {user} = useLoginAuth()

const schema = yup.object().shape({
    "name" : yup.string().required("A name is Required"),
    "email" : yup.string().email('invalid email').required("email is required"),
    'password': yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/,
      'Password must contain at least one number and one special character'
    )
    .required('Password is required'),
     'comfirm': yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),
})
const navigate = useNavigate()

  const onsubmit = async (data: SignUp) => {
    await createUserWithEmailAndPassword(auth , data.email, data.password )
    navigate("/")
  }
 
  const {register, handleSubmit, formState: {errors} }  = useForm({
    resolver : yupResolver(schema)
  })

 
  
    return (
        <>
       { !user && <Button variant='contained' endIcon={<AccountCircleIcon/>}  onClick={handleOpen} className='create'>Create account</Button> }
        <StyledDialog open={open} onClose={handleClose} sx={{padding: "30px"}} >
         <form className="form" noValidate autoComplete="off" onSubmit={handleSubmit(onsubmit)}> 
         <Stack justifyContent={'center'} alignItems={'center'} >
            <Typography variant='h4' color={'primary'}>Beatbox</Typography> 
        <DialogTitle textAlign={'center'}>Create Account </DialogTitle>
        <DialogContent >
         <StyledTextfield  sx={{my : 1}}  label="Name" fullWidth {...register("name")} helperText={errors.name?.message || ' '} />
          <StyledTextfield label="Email" fullWidth {...register("email")} helperText={errors.email?.message || ' '}  />
          <StyledFormControl fullWidth sx={{my : 1}} variant="outlined" >
          <InputLabel htmlFor="outlined-adornment-password" >Password</InputLabel>
          <StyledOutlinedInput
            id="password"
            type={showPassword ? 'text' : 'password'}
            {...register("password")} 
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
          <FormHelperText id="password">{errors.password?.message || ''}</FormHelperText>
        </StyledFormControl>

        <StyledFormControl  sx={{my : 2}}  fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Comfirm Password</InputLabel>
          <StyledOutlinedInput
            id="comfirm"
            type={showPassword ? 'text' : 'password'}
            {...register("comfirm")} 
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Comfirm Password"
          />
          <FormHelperText id="password">{errors.comfirm?.message || ''}</FormHelperText>
        </StyledFormControl>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Cancel</Button> */}
          <Button  variant="contained" sx={{borderRadius: 25, width:200, padding: 1.3, textTransform:"capitalize " }} type='submit' color="primary">
            Submit
          </Button>
        </DialogActions>
        </Stack>
        </form>
       </StyledDialog>

        </>
    )
}