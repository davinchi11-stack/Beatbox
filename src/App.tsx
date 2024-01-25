import './App.scss'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import { Home } from './Components/Home';
import { Login } from './Components/Login/Login';
import { HomePage } from './Components/homepage/Homepage';
import { Mount } from './mount/Mount';
import {useState, useEffect} from 'react'
import { HomeOutlet } from './Components/homepage/Home-outlet';
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth} from './config/firebase'
import { createTheme , ThemeProvider } from '@mui/material';


const theme = createTheme({
  typography : {
    fontFamily : "Kumbh Sans",
    fontWeightLight: 400,
    fontWeightMedium: 500,
    fontWeightRegular: 600,
    fontWeightBold: 700
  },
  palette : {
    primary : {
      main : '#1d9bf0'
    }
  }
})




function App() {

  const [user] = useAuthState(auth)
  const [mount , setMount ] = useState(true)

  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Home/>}>
           <Route path='/' element={mount ? <Mount/> : <Login/> }/>
            <Route path='home' element={user? <HomePage/> : <Mount/> }>
            <Route index element={user ? <HomeOutlet/> : <Mount/>}/>
           </Route> 
        </Route>
    )                                                                           
  )
  
  


  useEffect(()=> {
    setTimeout(() => {
      setMount(!mount)
    }, 2500);
    
  }, [])

  
  
  
 



  return (
   <>
    <ThemeProvider theme={theme}> 
    <RouterProvider router={router}/>
    </ThemeProvider>
   </>

  )
}

export default App
