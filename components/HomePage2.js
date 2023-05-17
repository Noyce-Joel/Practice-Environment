import React from "react";
import {
  
  useInView,
} from "@react-spring/web";

import { motion, spring } from "framer-motion";
import Heading from '../components/Heading'


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
    <div className="wrapper2">
        
     
      
        
      <div className="heading">
        <Heading />
       
      </div>
     
    </div>
  );
}
export default HomePage;
