import React from 'react'
import Title from '/components/Title';
import Flower from '/components/Flower'

export default function Layout({ children }) {
    return (
      <>
        <Title />
        <main>{children}</main>
        
      </>
    )
  }