import { Stack } from "@mui/material";
// import { LoginButton } from "./Loginbutton";
import Container from "@mui/material/Container";
import { LoginButtonPlus } from "./LoginButtonPlus";

export function Login() {
    return (
       <Container> 
        <div className="login">
           <Stack 
           width={"100%"}
           alignItems={'center'}
           justifyContent={"space-between"}
           direction={{xs: 'column', md: 'row' }}
           > 
             <div className="first-half">
                <h1>Beatbox</h1>
                <p>See what's next</p>
             </div>
             <div className="second-half">
               {/* <LoginButton/> */}
               <LoginButtonPlus/>
             </div>
             </Stack>
        </div>
       </Container>
    )
}