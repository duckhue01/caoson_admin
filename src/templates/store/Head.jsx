import React, { useContext } from 'react'

// components 
import  Button  from "../../components/Button";
import  Branch  from "../../components/Branch";

// templates
import Menu from "../Menu";

// icons
import { BiMenu } from "react-icons/bi";


// context 
import { AppContext } from "../../App";

const Head  = () => {
    const {isMenuOpen, menuHandle} = useContext(AppContext)

    return(
        <div>
            {isMenuOpen ? <Menu menuHandle={menuHandle}/> : null}
            <Button name="Call Now" className="border-b w-screen border-white bg-extend01 text-white tracking-wider font-semibold text-lg"/>
            <div className="w-screen  bg-extend01 flex justify-between ">
                        <Branch branch="Cao Son" className="p-4 text-white  tracking-wider font-semibold text-lg"/>
                        <BiMenu 
                            size={30} 
                            className="m-3 text-white z-20"
                            onClick={menuHandle}
                        
                        />
            </div>
            
           
        </div>
    )
}

export default Head
