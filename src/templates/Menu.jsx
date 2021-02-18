import React from "react";
import { FaFacebookF, FaInstagram, FaGithub} from "react-icons/fa";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

// components 
import  Button from "../components/Button";


export default function Menu({menuHandle}) {
    return(
        <div className="bg-black h-screen w-screen flex flex-col justify-center absolute z-10 opacity-90">
            
            <Link to='/' >
                <Button name="HOME" color="white" className="ml-auto mr-auto text-white" menuHandle={menuHandle}/> 
            </Link>
            <Link to='/service'>
                <Button name="SERVICE" className="ml-auto mr-auto text-white " menuHandle={menuHandle}/> 
            </Link>
            <Link to='projects'>
                <Button name="PROJECTS" className="ml-auto mr-auto text-white " menuHandle={menuHandle}/> 
            </Link>                
            <Link to='store'>
                <Button name="STORE" className="ml-auto mr-auto text-white " menuHandle={menuHandle}/>
            </Link>
            <Link >
                <Button name="CONTACT" className="ml-auto mr-auto text-white" menuHandle={menuHandle}/>  
            </Link>    
                              
            <div className="flex ml-auto mr-auto mt-10 justify-between w-32">
                <FaFacebookF color="white" size={20} />
                <FaInstagram color="white"size={20}/>
                <FaGithub color="white"size={20}/>

            </div>

                 
        </div>
    )
}