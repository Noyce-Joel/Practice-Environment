import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image';
import React from 'react'
import { useInView } from 'react-spring';

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

  const xPos = useTransform(
    
    scrollYProgress,
    [0,1],
    [1, 1500],
  )
  const [ref, springs] = useInView(
    () => ({
      from: {
        x: 0
      },
      to: {
       x: xPos
      },
      config: { tension: 210, friction: 100, mass: 25 },
    }),
    {
      rootMargin: "-50% 0%",
    }
  );
  return (
    <motion.div 
    initial={{ x: 100, scale: 0}}
    animate={{  scale: 1}}
    transition={{
      delay: 1,
      duration: 2,
      type: 'spring'
    }}
    ref={ref}
    
    className='smile-wrapII'>
        <motion.div className='smileII' style={{ ...springs, x: xPos,  scale: scroll}} >
        <video autoPlay muted className='smileII' src='/Colours.mp4'></video>
       
        </motion.div>
    </motion.div>
  )
}

export default Smile