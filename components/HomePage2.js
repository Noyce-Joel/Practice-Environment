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
import Heading from "components/Heading";

function HomePage() {
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
      <animated.div
        ref={ref}
        style={{ ...springs }}
        className="container2"
      ></animated.div>
      <div className="heading">
        <Heading />
      </div>
    </motion.div>
  );
}
export default HomePage;
