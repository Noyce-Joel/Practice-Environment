import React, { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Preload,
  ScrollControls,
  Scroll,
  useScroll,
  Image as ImageImpl,
  
} from "@react-three/drei";
import Heading from '../components/Heading'
import Berlin from "../components/Berlin";
function Image({...props}){
    const ref = useRef();
    return(
        <ImageImpl ref={ref} {...props}/>
    )
}

function Images(){
    const {width, height} = useThree((state) => state.viewport);
    const group = useRef();
    const data = useScroll();
    useFrame(() => {
        group.current.children[0].material.zoom = 1 + data.range(0, 1 / 4) / 4;
        group.current.children[1].material.zoom = 1 + data.range(0, 1 / 4) / 4;
        group.current.children[2].material.zoom =
          1 + data.range(1.15 / 3, 1 / 4) / 4;
        group.current.children[3].material.zoom =
          1 + data.range(1.15 / 3, 1 / 4) / 3;
        group.current.children[4].material.zoom =
          1 + data.range(1.25 / 3, 1 / 4) / 2;
        group.current.children[5].material.zoom =
          1 + data.range(1.8 / 3, 1 / 4) / 4;
        group.current.children[5].material.grayscale =
          1 - data.range(1.6 / 3, 1 / 4);
        group.current.children[6].material.zoom =
          1 + (1 - data.range(2 / 3, 1 / 4)) / 3;
      });
      return <group ref={group}>
        <Image rotation={[0, 0.5 / 1.7 ,0]} position={[-2, 0, 0]} scale={[4, height, 1]} url="/4.jpg" />
          <Image  position={[2, -1, 1]} scale={3} url="/1.jpg" />
          <Image position={[-1.4, -height-8 , 3.5]} scale={[1, 3, 1]} url="/3.jpg" />
          <Image position={[-0.6, -15.5, 3]} scale={[1, 2, 1]} url="/2.jpg" />
          <Image position={[0.75, -height-8.5, 3.4]} scale={1} url="/5.jpg" />
          <Image position={[0, -height-8 * 1.5, 2.5]} scale={[width, -height / 2, 1.5]} url="/bg2.jpg" />
          <Image position={[0, -height-8 * 2 - height / 4, 0]} scale={[width, height / 2, 1]} url="/bg.jpg" />
      </group>;
    
}

export default function Pictures() {
  return (
    
    <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
     <Suspense fallback={null} >
        <ScrollControls  damping={1} mass={2} pages={4}>
           
          <Scroll>
            <Images />
          </Scroll>
          <Scroll html>
            <div  className="overlay">
               <h1 className="overlay"><Heading /></h1> 
               
            </div>
            <div className="berlin-flex">
              <div className="berlin"><Berlin /></div>
            </div>
          </Scroll>
          
         
        </ScrollControls>
        <Preload />
       </Suspense>
      
    </Canvas>
   
  );
}
