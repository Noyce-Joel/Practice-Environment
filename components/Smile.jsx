import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image';
import React from 'react'

function Smile() {
  const { scrollYProgress } = useScroll();
  
  const scroll = useTransform(
    scrollYProgress,
    [0,1],
    [1, 20],
  )
  const scale = useSpring(scrollYProgress, {
    
    stiffness: 100,
    damping: 70,
    duration:5,

    
  });

  const xPos = useTransform(
    
    scrollYProgress,
    [0,1],
    [1, 1400],
    
  )

  return (
    <motion.div 
    initial={{ y: -1000, x: 1000, scale: 0}}
    animate={{ y: 0, x: 0, scale: 1}}
    transition={{
      delay: 1,
      duration: 2,
      type: 'spring'
    }}
    
    className='smile-wrap'>
        <motion.div className='smile' style={{ x: xPos,  scale: scroll, }} >
        <video autoPlay muted className='smile' src='/Colours.mp4'></video>
       
        </motion.div>
    </motion.div>
  )
}

export default Smile