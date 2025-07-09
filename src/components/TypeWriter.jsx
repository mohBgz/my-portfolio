import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const TypeWriter = ({classname}) => {
  return (
   <TypeAnimation
   
    sequence={[
      "Frontend developer.", 
      2000, 
     " React enthusiast.",
     2000,
     "Cybersec student.", 
     2000,
     "Learning backend.",
     2000
    ]}
    className={classname}
    wrapper='span'
    speed={30}
    
    repeat={Infinity}
    
   />
  )
}

export default TypeWriter