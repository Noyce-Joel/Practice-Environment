import { motion } from 'framer-motion'
import React from 'react'

function Smile() {
  return (
    <motion.div 
    initial={{scale: 0}}
    animate={{scale: 1}}
    transition={{
      delay: 1,
      duration: 2,
      type: 'spring'
    }}
    className='smile-wrap'>
        <div className='smile'>
        <video className='smile' autoPlay loop muted src='/Smile.mp4'/>
       
        </div>
    </motion.div>
  )
}

export default Smile