import React, { useContext } from 'react'

import {AppContext} from '../../App'

// component 
import { Button } from "../../components/Button";


// templates 
import Main from "../../templates/home/Main";
import Service from "../../templates/home/Service";
import About from "../../templates/home/About";
import Project from "../../templates/home/Project";
import Footer from "../../templates/Footer";


const Home = ()=> {

    const  {isMenuOpen, menuHandle} = useContext(AppContext)
    
    const homeStyle = isMenuOpen ? "h-screen overflow-y-hidden" : ""    
    return(
        
        <div className={homeStyle}>
        
            <Main/>
            <Service/>
            <About/> 
            <Project/>     
            <Footer/>
        
               
        </div>
    )
}


export default Home
