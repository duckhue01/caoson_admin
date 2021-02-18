import React from 'react'
import classNames from 'classnames'
import { AiOutlineHeart } from "react-icons/ai";

function Footer() {
    return (
        <div className=" bg-extend01 text-center border-t border-extend02 relative bottom-0">
            <div className="p-10  text-extend02 font-extend01 pb-20">
                <div className="text-3xl py-4">Lien He Chung Toi</div>
                <div>
                    <HomeIcon className="mx-auto mt-5 mb-3"/>
                    <div>
                        259 Me Linh, Vinh Yen, Vinh Phuc
                    </div>
                </div>
                <div>
                    <EmailIcon className="mx-auto mt-5 mb-3"/>
                    <div>
                        example@gmail.com
                    </div>
                </div>
                <div>
                    <PhoneIcon className="mx-auto mt-5 mb-3"/>
                    <div>
                        0981 565 134 - 039 267 2011
                    </div>
                </div>     

                    

            </div>
            <div className=" border boder-extend02 w-screen h-10  bottom-0 text-extend02 font-extend01 text-lg ">
                    
                <p
                    className="flex left-1/2  w-72 relative transform -translate-x-1/2 tracking-wide"
                >Is made with <AiOutlineHeart size={24} className="mx-1"/>by <a href="https://www.facebook.com/duckhue01/"><b>&ensp;duckhue01....  </b> </a></p>
            </div>   
                      
        </div>
    )
}


function HomeIcon({className}) {
    return(
        <svg 
            className={
                classNames(
                    className
                )
            }
            preserveAspectRatio="xMidYMid meet" data-bbox="20.36 20 159.28 160" viewBox="20.36 20 159.28 160" height={35} width={35} xmlns="http://www.w3.org/2000/svg" data-type="color" role="img" aria-labelledby="svgcid-hzt7dri7agx8"><defs><style dangerouslySetInnerHTML={{__html: "#comp-k1gdjfrh svg [data-color=\"1\"] {fill: #9A8A78;}" }} /></defs><title id="svgcid-hzt7dri7agx8" />
            <g>
                <path d="M179.64 180H20.36V83.717L99.476 20l80.164 63.706V180zm-154.142-5.138h149.004V86.185L99.496 26.578 25.498 86.175v88.687z" fill="#9A8A78" data-color={1} />
            </g>
        </svg>
    )
}

function EmailIcon({className}) {
    return(
        <svg 
            className={
                classNames(
                    className
                )
            }
            preserveAspectRatio="xMidYMid meet" data-bbox="20 50.968 160 98.064" viewBox="20 50.968 160 98.064" height="35" width="35" xmlns="http://www.w3.org/2000/svg" data-type="color" role="img" aria-labelledby="svgcid-j97osqc4q1ng"><title id="svgcid-j97osqc4q1ng"></title>
            <g>
                <path d="M180 149.032H20V50.968h160v98.064zm-154.839-5.161h149.677V56.129H25.161v87.742z" fill="#9A8A78" data-color="1"></path>
                <path fill="#9A8A78" d="M100 118.79L20.968 55.565l3.226-4.033L100 112.177l75.806-60.645 3.226 4.033L100 118.79z" data-color="1"></path>
            </g>
        </svg>
    )
}

function PhoneIcon({className}) {
    return(
        <svg 
            className={
                classNames(
                    className
                )
            }
            
            preserveAspectRatio="xMidYMid meet" data-bbox="50.968 20 98.064 160" viewBox="50.968 20 98.064 160" height={35} width={35} xmlns="http://www.w3.org/2000/svg" data-type="color" role="img" aria-labelledby="svgcid-bfezws-53bums"><title id="svgcid-bfezws-53bums" />
          <g>
            <path d="M135.615 180H64.388c-7.399 0-13.42-6.018-13.42-13.417V33.42c0-7.651 5.769-13.42 13.42-13.42h71.227c7.399 0 13.417 6.021 13.417 13.42v133.163c0 7.399-6.018 13.417-13.417 13.417zM64.388 25.161c-4.786 0-8.259 3.473-8.259 8.259v133.163c0 4.94 4.269 8.256 8.259 8.256h71.227c4.94 0 8.256-4.269 8.256-8.256V33.42c0-4.94-4.269-8.259-8.256-8.259H64.388z" fill="#9A8A78" data-color={1} />
            <path fill="#9A8A78" d="M146.451 147.999v5.161H53.548v-5.161h92.903z" data-color={1} />
          </g>
        </svg>
    )
}

export default Footer
