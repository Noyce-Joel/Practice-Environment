import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion'
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
    damping: 30,
    restDelta: 0.001
  });

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
        <motion.div style={{scale, y: scroll, scale: scroll}} className='smile'>
        <video className='smile' autoPlay muted src='/Colours.mp4'/>
       
        </motion.div>
    </motion.div>
  )
}

export default Smile