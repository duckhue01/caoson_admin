import React, { useContext } from 'react'

import {AppContext} from '../../App'
// templates
import  Head  from "../../templates/service/Head";
import  SerTemp  from "../../templates/service/SerTemp";


// images 
import ser03 from '../../assets/images/service/ser03.jpg'
import ser04 from '../../assets/images/service/ser04.jpg'
import Footer from '../../templates/Footer'
function Service() {
    const  {isMenuOpen, menuHandle} = useContext(AppContext)
    const homeStyle = isMenuOpen ? "h-screen overflow-y-hidden" : ""    
    return (
        <div className={homeStyle}>
            <Head/>
            <SerTemp    
                src={ser04} 
                tit="Complete Remodeling" 
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. I"
            />
            <SerTemp    
                src={ser03} 
                tit="Complete Remodeling" 
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. I"
            />
            <SerTemp    
                src={ser04} 
                tit="Complete Remodeling" 
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. I"
            />
            <SerTemp    
                src={ser03} 
                tit="Complete Remodeling" 
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. I"
            />
            <Footer/>
        </div>
    )
}

export default Service
