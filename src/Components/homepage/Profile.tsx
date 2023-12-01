import { NavLink } from "react-router-dom";
import {auth} from '../../config/firebase';
import {useAuthState} from 'react-firebase-hooks/auth'



export function ProfileAside () {
    const [user] = useAuthState(auth)
 


    return (
        <div className="profile-main">
            <div className="profile-one">
                <div className="cover-image"></div>
                <div className="info">
                    <img src={user?.photoURL || ''} alt="" />
                    <h3>{user?.displayName}</h3>
                    <p className="username">@username</p>
                    <span className="about"> about user </span>
                </div>
                <div className="profile-two">
                <div className="follow">
                    <div className="following">
                        <span className="follow-n">
                            N/A
                        </span>
                        <span className="name">Following</span>
                    </div>
                    <div className="followers">
                    <span className="follow-n">
                            N/A
                        </span>
                        <span className="name">Followers</span>
                    </div>
                </div>
                <div className="pro">
                    <NavLink to={'/home'}>My Profile</NavLink>
                </div>

                </div>
             
            </div>

        </div>
    )
}