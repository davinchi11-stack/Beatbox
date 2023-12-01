import { ProfileAside } from "./Profile";
import { Aside } from "./aside";
import { ContentBody } from "./contentBody";
import './scss/main-outlet.scss'


export function HomeOutlet () {
    return(
        <div className="content">
          <ProfileAside/>
          <ContentBody/>
          <Aside/>
        </div>
    )
}