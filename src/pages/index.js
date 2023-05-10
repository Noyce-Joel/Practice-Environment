import Head from "next/head";
import HomePage2 from "components/HomePage2";
import HomePage from "components/HomePage";
import Flower from "components/Flower.jsx";
import Berlin from "../../components/Berlin";
import HomePhotos from "../../components/HomePhotos";
import { useEffect, useState } from "react";
import Text from "../../components/Text";
import Smile from "../../components/Smile";
import Title from "../../components/Title";
import { Canvas } from "@react-three/fiber";
import Hero from "../../components/Hero";

export default function Home() {
  return (
    <div data-scroll-container>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <Flower />
      <div className="title-container">
        <Title />
      </div>
      <div data-scroll-section>
        <div data-scroll>
          <HomePage2 />
        </div>

        <div data-scroll>
          <Berlin />
        </div>
        <div data-scroll>
          <Hero />
        </div>
        <div data-scroll>
          <HomePhotos />
        </div>
        <div data-scroll>
          <HomePage />
        </div>
      </div>
    </div>
  );
}
