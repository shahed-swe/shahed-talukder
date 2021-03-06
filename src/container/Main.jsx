import Aos from "aos";
import "aos/dist/aos.css";
import React, {useEffect} from 'react';
import Home from '../components/home';
import Nav from '../components/Nav';
import About from '../components/About';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';
import Service from '../components/Services';
import Education from '../components/Education';
import Blog from '../components/Blogs';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

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
            <About/>
            <Skills/>
            <Portfolio/>
            <Service/>
            <Education/>
            <Blog/>
            <Contact/>
            <Footer/>
        </div>
    )
}
export default Main;