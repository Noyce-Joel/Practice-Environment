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

function HomePhotos() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const springApi = useSpringRef();
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { x: 125, size: "40%" },
    to: {
      x: open ? 0 : 125,
      size: open ? "100%" : "40%",
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
      config: { tension: 210, friction: 100, mass: 25 },
    }),
    {
      rootMargin: "-27% 0%",
    }
  );

  return (
    <motion.div className="wrapper">
      <animated.div
        ref={ref}
        style={{ ...springs, ...rest, width: size, height: size }}
        className="container-II"
        onClick={() => setOpen((open) => !open)}
      >
        {transition((style, item) => (
          <animated.div
            className="item"
            style={{ ...style, background: item.css}}
          />
        ))}
      </animated.div>
    </motion.div>
  );
}
export default HomePhotos;
