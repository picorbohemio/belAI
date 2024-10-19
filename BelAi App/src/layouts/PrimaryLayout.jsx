import { Outlet } from 'react-router-dom'
import Navbar from '../components/Header'

const PrimaryLayout  = () => {

    return(
        <>
            <Navbar/>
            <main>
                <Outlet/>
            </main>
        </>
    )
};

export default PrimaryLayout