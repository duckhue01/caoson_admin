import React, { useContext } from 'react'

import {AppContext} from '../../App'

// templates 
import ProTemp from "../../templates/projects/ProTemp";
import Head from "../../templates/projects/Head";
import Footer from '../../templates/Footer'

// images 
import proj01 from "../../assets/images/projects/proj01.jpg";
import proj02 from "../../assets/images/projects/proj02.jpg";
import proj03 from "../../assets/images/projects/proj03.jpg";
import proj04 from "../../assets/images/projects/proj04.jpg";
import proj05 from "../../assets/images/projects/proj05.jpg";
import proj06 from "../../assets/images/projects/proj06.jpg";
import proj07 from "../../assets/images/projects/proj07.jpg";
import proj08 from "../../assets/images/projects/proj08.jpg";
import proj09 from "../../assets/images/projects/proj09.jpg";
import proj10 from "../../assets/images/projects/proj10.jpg";
import proj11 from "../../assets/images/projects/proj11.jpg";
import proj12 from "../../assets/images/projects/proj12.jpg";
import proj13 from "../../assets/images/projects/proj13.jpg";
import proj14 from "../../assets/images/projects/proj14.jpg";
import proj15 from "../../assets/images/projects/proj15.jpg";
import proj16 from "../../assets/images/projects/proj16.jpg";






const projSet1 = [proj01, proj02, proj03, proj04, proj05, proj16]
const projSet2 = [proj06, proj07, proj08, proj09, proj10, proj11, proj12]
const projSet3 = [proj13, proj14, proj15]




function Project() {

    const  {isMenuOpen, menuHandle} = useContext(AppContext)
    const homeStyle = isMenuOpen ? "h-screen overflow-y-hidden" : ""    


    return (
        <div className={homeStyle}>
            <Head/>
            <ProTemp src={projSet1} tit="du an cua chugn toi" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."/>
            <ProTemp src={projSet2} tit="du an cua chugn toi" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."/>
            <ProTemp src={projSet3} tit="du an cua chugn toi" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."/>
            <Footer/>
            
        </div>
    )
}

export default Project
