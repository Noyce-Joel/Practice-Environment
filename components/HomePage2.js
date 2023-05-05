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
import data from "/components/data";
import { motion } from "framer-motion";
import Heading from '../components/Heading'

function HomePage() {
  const [open, setOpen] = useState(false);

  const springApi = useSpringRef();
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: {x: -70, size: "40%", width: '40vw' },
    to: {
      width: open ? '25vw' : '40vw',
      x: open ? 0 : -70,
      size: open ? "60%" : "40%",
    },
  });

  const transApi = useSpringRef();
  const transition = useTransition(open ? data : [], {
    ref: transApi,
    trail: 400 / data.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  });

  useChain(open ? [springApi, transApi] : [transApi, springApi], [
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
    <div className="scroll">
      <span>s</span>
      <span>c</span>
      <span>r</span>
      <span>o</span>
      <span>l</span>
      <span>l</span>
       
        </div>
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
