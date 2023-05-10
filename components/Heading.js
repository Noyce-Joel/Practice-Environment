import { motion } from "framer-motion"
import Flowers from "./Flowers"
import Smile from "./Smile"





export default function MyComponent() {

   

  return (
    <div>
        <div className="h1">
   <motion.div className='h1' initial={{y:200}} animate={{y:0}} transition={{duration: 1.2, delay: 1, type: "tween"}}>THIS</motion.div>
   </div>
   <div className="h1">
   <motion.div className='h1' initial={{y:200}} animate={{y:0}} transition={{duration: 1.2, delay: 1.2, type: "tween"}}>IS</motion.div>
   </div>
   <div className="h1">
   <motion.div className='h1' initial={{y:200}} animate={{y:0}} transition={{duration: 1.2, delay: 1.4, type: "tween"}}>MY</motion.div>
   </div>
   <div className="h1">
   <motion.div className='h1' initial={{y:200}} animate={{y:0}} transition={{duration: 1.2, delay: 1.6, type: "tween"}}>PORTFOLIO</motion.div>
   
   </div>
    <Smile />
   </div>
  )
}