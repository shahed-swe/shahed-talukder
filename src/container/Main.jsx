import Aos from "aos";
import "aos/dist/aos.css";
import React, {useEffect} from 'react';
import Home from '../components/home';
import Nav from '../components/Nav';


function Main(){
    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    useEffect(() => {
        Aos.init({duration: 2000, offset: 200});
    })

    return (
        <div className="main-container">
            <Nav/>
            <Home/>
        </div>
    )
}
export default Main;