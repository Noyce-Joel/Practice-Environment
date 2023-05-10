import React, { useState } from "react";
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
  useInView,
} from "@react-spring/web";

import { motion } from "framer-motion";
import Heading from '../components/Heading'


function HomePage() {
  const [open, setOpen] = useState(false);

  const springApi = useSpringRef();
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.gentle,
    from: {x: 0, size: "40%", width: '40vw' },
    to: {
      width: open ? '25vw' : '40vw',
      x: open ? 0 : -70,
      size: open ? "60%" : "40%",
    },
  });

  
  
  useChain(open ? [springApi, springApi] : [springApi, springApi], [
    0,
    open ? 0.1 : 0.55,
  ]);

  const [ref, springs] = useInView(
    () => ({
      from: {
        scale: 0.75,
      },
      to: {
        scale: 1,
      },
      config: { tension: 210, friction: 150, mass: 25 },
    }),
    {
      rootMargin: "-27% 0%",
    }
  );
  return (
    <motion.div className="wrapper2">
      
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    className="scroll">
      <span>s</span>
      <span>c</span>
      <span>r</span>
      <span>o</span>
      <span>l</span>
      <span>l</span>
      
        </motion.div>
        
      <animated.div
        ref={ref}
        style={{ ...springs, height: size, wdith: size, ...rest }}
        className="container2"
        onClick={() => setOpen((open) => !open)}
        
      >
        

      </animated.div>
      
        
      <div className="heading">
        <Heading />
       
      </div>
     
    </motion.div>
  );
}
export default HomePage;
