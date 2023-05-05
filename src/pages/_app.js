import '@/styles/globals.css'
import Layout from '/components/Layout'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react';

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});

export default function App({ Component, pageProps }) {
  const [scroll, setScroll] = useState(null);

  useEffect(() => {
    const loadScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      setScroll(
        new LocomotiveScroll({ smooth: true, multiplier: 0.2 })
      );
    };

    loadScroll();
  }, []);

  return <>
  
  <Layout>
    <AnimatedCursor 
    color={'255,255,255'}
    innerSize={95}
    outerSize={40}
    innerScale={0.7}
    outerScale={0.7}
    outerAlpha={10}
    hasBlendMode={true}

    outerStyle={{
      mixBlendMode: 'difference',
      
      
    }}
    innerStyle={{
      mixBlendMode: 'difference',
    }}
    
    
    />
  <Component {...pageProps} />
  </Layout>
  
  </>
}
