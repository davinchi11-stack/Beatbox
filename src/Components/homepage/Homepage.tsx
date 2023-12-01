import { Outlet} from 'react-router-dom'
import './scss/home.scss'
import { Header } from './Header'


export function HomePage () {
    return (
        <div className='home'>
            <Header/>
            <main className='main-outlet'>
                <Outlet/>
            </main>
        </div>
    )
}