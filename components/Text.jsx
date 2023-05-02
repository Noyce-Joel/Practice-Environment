import { motion } from "framer-motion";
import React, { useRef } from "react";
import { useInView, animated } from "react-spring";

const Text1 = (props) => {
  const [ref, springy] = useInView(
    () => ({
      from: {
       
        y:150,
      },
      to: {
        
        y: 0,
      },
      config: { tension: 210, friction: 250, mass: 25 },
    }),
    {
      rootMargin: "0% 0%",
      once: true
    },
    
  );

  const [refH1, springier] = useInView(
    () => ({
      from: {
       
        x:-150,
      },
      to: {
        
        x: 0,
      },
      config: { tension: 210, friction: 250, mass: 25 },
    }),
    {
      rootMargin: "0% 0%",
      once: true
    },
    
  );

  
  return (
    <div>
      <animated.div
      ref={refH1} style={{ ...springier}}
      className='text-h1'
    >
      BERLIN
    </animated.div>
    <animated.div
      ref={ref} style={{ ...springy}}
      className='text'
    >
     I'm a massive great big gorgeous, loved up, lovely love who would love for you to keep scrolling to see more of my loveableness and amazing art borne out of my incredible lovliness. He needs me, he needs me, he needs me, he needs me, oh, how he needs me. I'm also extremely cute but you shouldn't go on about it!
    </animated.div>
    </div>
  );
};

export default Text1;