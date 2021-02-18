



import React from 'react'

const SerTemp = ({src, tit, text}) => {
    return (
        <div className="bg-extend01">       
            <img src={src} className="w-screen h-auto" />
            <div className="p-5">
                <div className="text-extend02 mb-5 text-xl">{tit}</div>
                <div className="text-white">{text}</div>
            </div>
        </div>
    )
}

export default SerTemp
