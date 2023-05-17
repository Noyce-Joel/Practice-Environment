import {  OrbitControls } from '@react-three/drei';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import {  useScroll, useTransform } from 'framer-motion';
import React, { Suspense, useRef } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import Text2 from '../components/Text2'

function Hero() {
  


const Model = () => {
  const gltf = useLoader(GLTFLoader, './painting.glb');
  const ref = useRef();
  const {scrollYProgress} = useScroll();
  const rotation = useTransform(
    scrollYProgress,
    [0, 1.5],
    [0, 1.05]
  )
  useFrame((state, delta, xrframe) => {
    ref.current.rotation.y = rotation.get()
  })
  return <primitive object={gltf.scene} scale={17.5} ref={ref} />
}

  return (
    <div className='box-container'>
    <div className='box'>
        
        <Canvas>
            
        <Suspense fallback={null}>
            
          <Model />
        </Suspense>
      </Canvas>
    </div>
  
    </div>
  )
}

export default Hero
