import { LoginButton } from "./Loginbutton";

export function Login() {
    return (
        <div className="login">
             <div className="first-half">
                <h1>Beatbox</h1>
                <p>See what's next</p>
             </div>
             <div className="second-half">
               <LoginButton/>
             </div>

        </div>
    )
}