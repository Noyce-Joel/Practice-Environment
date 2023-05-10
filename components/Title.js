import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef } from "react";
import Flowers from '../components/Flowers'
function Title() {
  const name = [
    {
      name: "R",
    },
    {
      name: "O",
    },
    {
      name: "S",
    },
    {
      name: "I",
    },
    {
      name: "E",
    },
    {
        name: '',
    },
    {
      name: "G",
    },
    {
      name: "L",
    },
    {
      name: "A",
    },
    {
      name: "S",
    },
    {
      name: "S",
    },
    {
      name: "E",
    },
  ];
  return (
    <div className="title-wrap">
        
    <div className="title ">
      
        {name.map((item, index) => (
            <motion.span
            
            key={index}
            initial={{ y: 200}}
            animate={{ y: 0}}
            transition={{ delay: index * 0.15, type: 'spring', bounce: 0.2, mass: 0.5 }}>
                {item.name}
                
                </motion.span>
        ))}
        
        
      
    </div>
    
    </div>
  );
}

export default Title;
