import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useScroll } from "framer-motion";

const Elements22 = (props) => {

  const { scrollYProgress } = useScroll();
  
  const scroll = useTransform(
    scrollYProgress, 
    [0, 450],
    [0, 100]
  )
  return (
    <svg
    className='flower2'
      height="70pt"
      width="100pt"
      version="1.1"
      viewBox="0 0 864 864"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs />
      <motion.path 
	 style={{pathLength: scroll}} 
	  >
		'ROSIE GLASSE'
	  </motion.path>
      
    </svg>
  );
};

export default Elements22;
