import React from 'react'

import classNames from "classnames";


function Button({name, className, menuHandle}) {

  
    return(
        <div 
            className={ 
                classNames(
                    "h-10 w-24 text-center leading-10  cursor-pointer hover:text-extend01",                   
                    className
                )
            }
            onClick={menuHandle}  
                  
        >
            {name}
        </div>
    
    )
}

export default Button;