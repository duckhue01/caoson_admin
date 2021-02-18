import React from 'react'


// images 
import aboutImg from "../../assets/images/about.jpg";
const About = () => {
    return (
        <div className="bg-extend01 ">
            <div className="p-10">
                <h2 className="text-3xl text-white py-4">Ve Chung Toi</h2>
                <h3 className=" text-extend02 text-xl pb-4">Newel Residential Remodeling</h3>
                <p className="text-white tracking-wide text-lg">
                I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
                </p>
            </div>
            <img src={aboutImg} />
        </div>
    )
}

export default About
