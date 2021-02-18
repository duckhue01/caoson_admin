import React, {useEffect } from 'react'

const ProTemp = ({src, tit, text}) => {
    return (
        <div className="bg-extend01">
            <div className="p-5">
                <div className="text-extend02 text-xl pb-5">{tit}</div>
                <div className="text-white">{text} </div>
            </div>
            {
                src.map((s, i) =>(               
                    <img src={s} key={i} 
                        className="mx-auto my-5 w-11/12 border border-extend02"
                    /> ))
            }
            
            
        </div>
    )
}

export default ProTemp
