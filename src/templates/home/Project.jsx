import React from 'react'

// components 

import Button from "../../components/Button";


// images 
import proj01 from "../../assets/images/home/proj01.jpg";
import proj02 from "../../assets/images/home/proj02.jpg";
import proj03 from "../../assets/images/home/proj03.jpg";
import proj04 from "../../assets/images/home/proj04.jpg";
import proj05 from "../../assets/images/home/proj05.jpg";


function Project() {
    return (
        <div className="w-screen bg-extend01 ">
            <div className="p-10 border-t border-extend02">
                <div className="text-3xl text-white py-4"> Du An Gan Day</div>
                <img src={proj01} className="w-full h-auto mx-auto my-5 border border-extend02"/>
                <img src={proj02} className="w-full h-auto mx-auto my-5 border border-extend02"/>
                <img src={proj03} className="w-full h-auto mx-auto my-5 border border-extend02"/>
                <img src={proj04} className="w-full h-auto mx-auto my-5 border border-extend02"/>
                <img src={proj05} className="w-full h-auto mx-auto my-5 border border-extend02"/>
                <Button name='VIEW ALL' className=" bg-extend02 w-full mx-auto text-white "/>
            </div>
            
            

        </div>
    )
}

export default Project
