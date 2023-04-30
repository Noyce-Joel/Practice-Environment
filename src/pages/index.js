import Head from "next/head";
import HomePage from "components/HomePage";
import Flower from "components/Flower.jsx";
import Title from "components/Title";

import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title />
      <Flower />
      <Parallax>
      <HomePage />
      <HomePage />
      <HomePage />
      <HomePage />
      <HomePage />
      <HomePage />
      <HomePage />
      <HomePage />
      <HomePage />
      <HomePage />
      </Parallax>
     
    </>
  );
}
