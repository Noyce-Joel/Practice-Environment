import { motion } from "framer-motion"
import { SocialIcon } from "react-social-icons";





export default function MyComponent() {

   

  return (
    <div>
        <div className="h1">
   <motion.div className='h1' initial={{x: 200, y:200}} animate={{x: 0, y:0}} transition={{duration: 1.2, delay: 1, type: "tween"}}>ROSIE</motion.div>
   </div>
   <div className="h1">
   <motion.div className='h1' initial={{x: 200, y:200}} animate={{x: 0, y:0}} transition={{duration: 1.2, delay: 1.2, type: "tween"}}>GLASSE</motion.div>
   </div>
   <div className="h1">
   <motion.div className='h1' initial={{x: 200, y:200}} animate={{x: 0, y:0}} transition={{duration: 1.2, delay: 1.6, type: "tween"}}></motion.div>
   </div>
   <div className="h1">
   <motion.div className='h1' initial={{x: 200, y:200}} animate={{x: 0, y:0}} transition={{duration: 1.2, delay: 1.4, type: "tween"}}>PORTFOLIO</motion.div>
   
   </div>
   <div className="icons">
    <motion.div initial={{ y:200}} animate={{x: 0, y:0}} transition={{duration: 1.2, delay: 1, type: "tween"}}>
   <SocialIcon
           className="icon"
            url="https://twitter.com/ForgeBakehouse"
            height='20px'
            width='20px'
          ></SocialIcon>
          </motion.div>
          <motion.div initial={{y:200}} animate={{x: 0, y:0}} transition={{duration: 1.5, delay: 1, type: "tween"}}>
   <SocialIcon
           className="icon"
            url="https://facebook.com"
            height='20px'
            width='20px'
          ></SocialIcon>
          </motion.div>
          <motion.div initial={{ y:200}} animate={{x: 0, y:0}} transition={{duration: 1.9, delay: 1, type: "tween"}}>
   <SocialIcon
           className="icon"
            url="https://instagram.com"
            height='20px'
            width='20px'
          ></SocialIcon>
          </motion.div>
          

   </div>
   
   </div>
  )
}